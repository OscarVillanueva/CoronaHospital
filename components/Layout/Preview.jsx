import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: '#fff',
    },
    section: {
        margin: 10,
        padding: 10,
    },
    title: {
        fontSize: "22",
        textAlign: "center",
        fontFamily: "Helvetica",
        textTransform: "uppercase",
        marginTop: "45"
    },
    description: {
        marginTop: 10,
        textAlign: "center",
        fontSize: "15"
    },
    prescription: {
        fontSize: 16,
        whiteSpace: "pre-wrap"
    }
});

const PDF = ({ doctor, prescription, bill }) => {

    const { name, lastName, email, document } = doctor

    return ( 
        <>
            <PDFViewer
                width = "100%"
                height = "550"
            >
                <Document>
                    <Page size="A4" style={styles.page}>

                        <View style={styles.section}>
                            <Text style = { styles.title } >Receta Médica</Text>

                            <View style = { styles.description }>
                                <Text>{name} {lastName}</Text>
                                <Text>{email}</Text>
                                <Text>Cédula: {document}</Text>
                            </View>

                        </View>

                        <View style = { styles.section }>

                            <Text style = { styles.prescription }>
                                {prescription}
                            </Text>

                        </View>

                        <View style = { styles.section }>

                            <Text style = { styles.prescription }>
                                Total: ${bill}
                            </Text>

                        </View>

                    </Page>
                </Document>
            </PDFViewer>
        </>
    );
}
 
export default PDF;