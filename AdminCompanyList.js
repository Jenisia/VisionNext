import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

const AdminCompanyList = ({ navigation }) => { // Add navigation prop
    const [companies, setCompanies] = useState([]);
    const [companyName, setCompanyName] = useState('');
    const [companyAddress, setCompanyAddress] = useState('');

    const addCompany = () => {
        const newCompany = {
            id: companies.length + 1,
            name: companyName,
            address: companyAddress,
            status: 'Pending',
        };
        setCompanies([...companies, newCompany]);
        setCompanyName('');
        setCompanyAddress('');
        Alert.alert('Company added successfully!');
    };

    const deleteCompany = (id) => {
        setCompanies(companies.filter((company) => company.id !== id));
        Alert.alert('Company deleted successfully!');
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Admin Company List</Text>
            <TextInput
                placeholder="Company Name"
                value={companyName}
                onChangeText={setCompanyName}
                style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <TextInput
                placeholder="Company Address"
                value={companyAddress}
                onChangeText={setCompanyAddress}
                style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            />
            <Button title="Add Company" onPress={addCompany} />

            {/* Navigate to Company Listing Button */}
            <Button 
                title="View Company List" 
                onPress={() => navigation.navigate('CompanyListing')} 
            />

            <FlatList
                data={companies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: 10 }}>
                        <Text>Company: {item.name}</Text>
                        <Text>Address: {item.address}</Text>
                        <Text>Status: {item.status}</Text>
                        <Button title="Delete" onPress={() => deleteCompany(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default AdminCompanyList;
