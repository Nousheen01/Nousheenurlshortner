import { Container, TextInput, Button } from '@mantine/core';
import React, { useState } from 'react';
import Service from '../utils/http';
const obj = new Service();
import axios from 'axios';

export default function UrlForm(props) {
   
    const generateShortUrl = async(data) => {
        try {
            let res = await obj.post("s", data)
            console.log(res);
            props.setResponse(setResponse);
        } catch (error) {
            console.log(error);
        }   
    }

    const[data, setData] = useState({
        originalUrl: "",
        expiresAt: "",
        title: "",
        customUrl: "xyz",
    });

  return (
    <Container size={"xs"}>
        <TextInput 
            mt={"xl"}
            withAsterisk
            size="lg" 
            radius="lg"
            label="Original Url(optional)"
            placeholder="Enter your Original url"
            onChange={(e) => {
                setOriginalUrl(e.target.value)
                setData({...data, originalUrl: e.target.value})
            }}
        />
        <TextInput
            size={"lg"}
            radius="lg"
            label="Custom Url (Optional)"
            placeholder="Enter your custom url"
            onChange={(e) => setCustomUrl(e.target.value)}
        />
        <TextInput
            size="lg"
            radius="lg"
            label="Title (Optional)"
            placeholder="Enter your Title"
            onChange={(e) => setTitle(e.target.value)}
        />
        <TextInput
            Type='date'
            size="lg"
            radius="lg"
            label="Expiry(optional)"
            placeholder="Enter your Expiry date"
            onChange={(e) => setExpiresAt(e.target.value)}
        />

        <Button 
        onClick={() => {
            console.log(data);
            generateShortUrl(data);
        }}
        disabled={data.originalUrl.length > 10} fullWidth mt="xl" size="lg" radius="lg"> Generate Short Url </Button>
    </Container>

  )
}