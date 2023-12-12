import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Schedule = () => {

  const navigation = useNavigation();

  const getDatesForCurrentWeek = () => {
      const today = new Date();
      const currentDay = today.getDay();
      const firstDay = new Date(today.setDate(today.getDate() - currentDay));
      const dates = [0, 1, 2, 3, 4, 5, 6].map((day) => {
          const date = new Date(firstDay);
          date.setDate(firstDay.getDate() + day);
          return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      });
      return dates;
  };

  const [initialScheduleData, setInitialScheduleData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://10.3.0.93:7000/events/all');
      const data = await response.json();
      console.log("got data");
      setInitialScheduleData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const dates = getDatesForCurrentWeek();
  const [ selectedDate, setSelectedDate ] = useState(null);

  const filteredScheduleData = selectedDate
    ? initialScheduleData.filter((item) => item.date === selectedDate)
    : initialScheduleData;

  const handleSchedulePress = (date) => {
    setSelectedDate(date);
  }

  return (
      <View style={styles.container}>
          <Text style={styles.title}>Schedule</Text>
          <View style={styles.datesContainer}>
            {dates.map((date, index) => (
              <TouchableOpacity key={index} onPress={() => handleSchedulePress(date)} style={styles.dateClick}>
                <Text key={index} style={styles.date}>
                  {date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <ScrollView style={styles.scrollView}>
          {filteredScheduleData.map((item, index) => (
            <View key={index} style={styles.scheduleItem}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.event}>{item.event}</Text>
              <Text style={styles.details}>{item.location}</Text>
              <Text style={styles.details}>{item.opposingSchool}</Text>
            </View>
          ))}
          </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    marginBottom: 20,
    width: '15%'
  },
  date: {
    fontSize: 20,
    borderColor: '#000',
    width: '1/7',
    textAlign: 'center',
    backgroundColor: '#003366',
    borderRadius: 5,
    padding: 5,
    margin: 1,
    color: 'white',
  },
  dateClick: {
    marginBottom: -20,
  },
  scrollView: {
    marginTop: 10,
    width: '100%',
  },
  scheduleItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#003366',
  },
  time: {
    fontSize: 18,
    marginBottom: 5,
    color: 'white',
  },
  event: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
});

export default Schedule;
