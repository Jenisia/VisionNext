import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

const CompanyListing = () => {
  const [companies] = useState([
    { id: '1', name: 'Company 1', createdBy: 'Adminusername', address: 'address 1' },
    { id: '2', name: 'Company 2', createdBy: 'NormalUser1', address: 'address 2' },
    { id: '3', name: 'Company 3', createdBy: 'NormalUser2', address: 'address 3' },
    { id: '4', name: 'Company 4', createdBy: 'NormalUser3', address: 'address 4' },
  ]);

  const [filteredCompanies, setFilteredCompanies] = useState(companies);
  const [companyName, setCompanyName] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const handleFilter = () => {
    const filtered = companies.filter(company => {
      return (
        (companyName === '' || company.name.includes(companyName)) &&
        (createdBy === '' || company.createdBy.includes(createdBy))
      );
    });
    setFilteredCompanies(filtered);
  };

  const handleEdit = (id) => {
    Alert.alert('Edit', `Edit Company with ID: ${id}`);
  };

  const handleDelete = (id) => {
    Alert.alert('Delete', `Delete Company with ID: ${id}`);
  };

  const handleApprove = (id) => {
    Alert.alert('Approve', `Approve Company with ID: ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company Listing</Text>
      <TextInput
        placeholder="Search by Company Name"
        value={companyName}
        onChangeText={setCompanyName}
        style={styles.input}
      />
      <TextInput
        placeholder="Search by Created By"
        value={createdBy}
        onChangeText={setCreatedBy}
        style={styles.input}
      />
      <Button title="Filter" onPress={handleFilter} />

      <FlatList
        data={filteredCompanies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.companyItem}>
            <Text>Company Name: {item.name}</Text>
            <Text>Created By: {item.createdBy}</Text>
            <Text>Address: {item.address}</Text>
            <View style={styles.actions}>
              <Button title="Edit" onPress={() => handleEdit(item.id)} />
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
              {item.createdBy.startsWith('NormalUser') && (
                <Button title="Approve" onPress={() => handleApprove(item.id)} />
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  companyItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 2,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default CompanyListing;
