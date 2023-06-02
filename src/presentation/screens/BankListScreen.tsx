import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetBankListUseCase from '../../domain/useCases/GetBankListUseCase';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BankListScreen = () => {
    const [bankList, setBankList] = useState([]);
    const { top } = useSafeAreaInsets();

    useEffect(() => {
        // OJO: Solo descomentar la linea de abajo si se desea hacer pruebas de funcionamiento de api y BD y ver consola.
        // removeItemBD();
        const getBankListUseCase = new GetBankListUseCase();

        getBankListUseCase.execute()
            .then((list: any) => {
                setBankList(list);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const removeItemBD = async() => {
        try {
            await AsyncStorage.removeItem('banks');
            return true;
        }
        catch(exception) {
            return false;
        }
    }

    return (
        <View style={{ ...styles.container, marginTop: top + 15 }}>
            <FlatList
                data={bankList}
                keyExtractor={(item: any) => item.bankName}
                renderItem={({ item }) => (
                    <View style={styles.bankItemContainer}>
                        <Image style={styles.logoImage} source={{ uri: item.url }} />
                        <Text style={styles.bankName}>{item.bankName}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.age}>Age: {item.age}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
        marginBottom: 15,
        marginVertical: 20
    },
    bankItemContainer: {
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    bankName: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 8,
        color: 'black'
    },
    description: {
        fontSize: 16,
        marginTop: 4,
    },
    age: {
        fontSize: 14,
        marginTop: 4,
        color: 'gray',
    },
});

export default BankListScreen;
