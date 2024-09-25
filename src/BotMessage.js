import React, { useState, useEffect } from "react";
import OpenAI from "openai";

export default function BotMessage(props) {
    let response = null;
    let [assistantResponse, SetAssistantResponse] = useState("Loading...");
    const openai = new OpenAI({
        organization: "org-AipVPyc7QTQ2agdSdrW5DsFO",
        project: "proj_SOwTvPtO1PYQCFXIX704GJ78",
        apiKey: "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",
        dangerouslyAllowBrowser: true
    });

    const data = {
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'user',
            content: props.prompt
          }
        ],
        temperature: 0.7
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                response = await openai.chat.completions.create(data);
            } catch (err) {
                SetAssistantResponse("" + err);
            } finally {
                
            }
        };

        fetchData();
    });

    return (
        <div class="message bot">
            <div class="message-content">{assistantResponse}</div>
        </div>
    );
}