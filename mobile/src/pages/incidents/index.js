import React from "react";
import { View, Image, Text, Button } from "react-native";

import logoImg from "../../assets/Logo.png";
import styles from "./styles";

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}> 0 casos</Text>
                    .
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>

            <View style={styles.incidentList}>
                <View style={styles.incident}>
                    <Text style={styles.ongName}>APAD</Text>
                    <Text style={styles.caseDescription}>Cachorrinha atropelada na rua augusta.</Text>
                    <Text style={styles.caseValue}>R$120,00</Text>
                </View>
            </View>
        </View>
    );
}
