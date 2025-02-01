import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";

export default function BotMessage(props) {
    // Initialize a state hook to keep track of the status of the response.
    // Set the initial state of the response hook to "Loading..." so as to display it 
    // until a result is received from Gemini.
    const [response, SetResponse] = useState("Loading...");

    // Leverage GoogleGenerativeAI package to connect with Gemini's server.
    const genAI = new GoogleGenerativeAI("AIzaSyA7AJ93pbecmz9s3pUyxhskybYBwSPXoJk");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Initialize an Effect Hook to set the value of the response variable to the text returned by Gemini's server.
    useEffect(() => {
        // Define an asynchronous function to request and set the response to the prompt.
        const GetResponse = async () => {
            try {
                // Make a request to Gemini's server using the user's prompt.
                const result = await model.generateContent(props.prompt);

                // Initialize an index variable to increment gradually.
                let index = 1;

                // Create an interval ID to give the user a real-time typing effect
                // as they're reading the response.
                // The interval's function will run every 5 milliseconds.
                const intervalId = setInterval(() => {
                    // Set the state of the response hook to the string from 0 to the value of index
                    // at every interval.
                    SetResponse(result.response.text().substring(0, index));

                    // Increment the value of index at every interval.
                    index++;

                    // If the value of index is greater than the length of the response text,
                    // we have reached the end of the response text, and so this interval ID must be cleared.
                    if (index > result.response.text().length) {
                        clearInterval(intervalId);
                    }
                }, 5);
            } catch (err) {
                SetResponse("" + err);
            }
        };

        // Call the asynchronous function.
        GetResponse();
    }, []);

    // Return the message <div> with the value of the response state.
    return (
        <div class="message bot">
            <div class="message-content" dangerouslySetInnerHTML={{ __html: marked.parse(response)}} />
        </div>
    );
}