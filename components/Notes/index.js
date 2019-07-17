import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import Item from './Item';
import axios from 'axios';

async function fetchNotes(callback) {
  try {
    const response = await axios.get('https://notes-workshop.herokuapp.com/notes.json')
    const { data } = response;
    callback(data);
  } catch(err) {
    callback([]);
  }
}

const myKeyExtractor = (item, index) => `item-${item.id}`;

function Notes() {
  let [notes, setNotes] = useState([]);
  let [refreshing, setRefreshing] = useState(false);
  
  useEffect(() => {
    fetchNotes((data) => {
      setNotes(data);
    })
  }, []);

  const _onRefresh = () => {
    setRefreshing(true);

    fetchNotes((data) => {
      setNotes(data);
      setRefreshing(false);
    });
  }

  return (
    <FlatList
      data={notes}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={myKeyExtractor}
      refreshControl={
        <RefreshControl
          colors={["#9Bd35A", "#689F38"]}
          refreshing={refreshing}
          onRefresh={_onRefresh}
        />
      }
    />
  );
}

export default Notes;