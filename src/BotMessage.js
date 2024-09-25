import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function BotMessage(props) {
    const [response, SetResponse] = useState("Loading...");
    const genAI = new GoogleGenerativeAI("AIzaSyA7AJ93pbecmz9s3pUyxhskybYBwSPXoJk");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    useEffect(() => {
        const GetResponse = async () => {
            try {
                const result = await model.generateContent(props.prompt);
                console.log(result);
                SetResponse(result.response.text());
            } catch (err) {
                SetResponse("" + err);
            }
        };

        GetResponse();
    }, []);

    return (
        <div class="message bot">
            <div class="message-content">{response}</div>
        </div>
    );
}