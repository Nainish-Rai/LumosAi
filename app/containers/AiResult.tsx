"use client";

import React, { useEffect, useState } from "react";

type Props = {
  searchTerm: string;
};
const API_URL = "";
const API_KEY = "";

function AiResult({ searchTerm }: Props) {
  const [doner, setDoner] = useState<boolean>(false);
  useEffect(() => {
    const promptInput = document.getElementById(
      "promptInput"
    ) as HTMLInputElement;
    const generateBtn = document.getElementById(
      "generateBtn"
    ) as HTMLButtonElement;
    const stopBtn = document.getElementById("stopBtn") as HTMLButtonElement;
    const resultText = document.getElementById(
      "resultText"
    ) as HTMLTextAreaElement;
    let controller: AbortController | null = null; // Store the AbortController instance

    const generate = async () => {
      // // Alert the user if no prompt value
      // if (promptInput != null && !promptInput.value) {
      //   alert("Please enter a prompt.");
      //   return;
      // }

      // Disable the generate button and enable the stop button
      if (generateBtn != null) generateBtn.disabled = true;
      stopBtn.disabled = false;
      resultText.innerText = "Generating...";

      // Create a new AbortController instance
      controller = new AbortController();
      const signal = controller.signal;

      try {
        // Fetch the response from the OpenAI API with the signal from AbortController
        const response = await fetch(API_URL!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: promptInput.value ? promptInput.value : searchTerm,
              },
            ],
            stream: true, // For streaming responses
          }),
          signal, // Pass the signal to the fetch request
        });

        // Read the response as a stream of data
        const reader = response.body!.getReader();
        const decoder = new TextDecoder("utf-8");
        resultText.innerText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            setDoner(true);
            break;
          }
          // Massage and parse the chunk of data
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");
          const parsedLines = lines
            .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
            .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
            .map((line) => JSON.parse(line)); // Parse the JSON string

          for (const parsedLine of parsedLines) {
            const { choices } = parsedLine;
            const { delta } = choices[0];
            const { content } = delta;
            // Update the UI with the new content
            if (content) {
              resultText.innerText += content;
            }
          }
          // if (!doner) {
          //   window.setInterval(function () {
          //     var elem = document.getElementById("resultContainer");
          //     elem!.scrollTop = elem!.scrollHeight;
          //   }, 100);
          // }
        }
      } catch (error) {
        // Handle fetch request errors
        if (signal.aborted) {
          resultText.innerText = "Request aborted.";
        } else {
          console.error("Error:", error);
          resultText.innerText = "Error occurred while generating.";
        }
      } finally {
        // Enable the generate button and disable the stop button
        generateBtn.disabled = false;
        stopBtn.disabled = true;
        controller = null; // Reset the AbortController instance
      }
    };

    const stop = () => {
      // Abort the fetch request by calling abort() on the AbortController instance
      if (controller) {
        controller.abort();
        controller = null;
      }
    };

    promptInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        generate();
      }
    });
    generateBtn.addEventListener("click", generate);
    stopBtn.addEventListener("click", stop);
    generate();
  }, []);
  return (
    <div>
      <div className="lg:w-full lg:m-4  lg:p-8 p-6 m-2 mx-0 rounded-2xl bg-gray-100 dark:bg-neutral-900">
        <h1 className="text-3xl font-bold mb-6">AI Generated Results</h1>
        <div
          id="resultContainer"
          className="mt-4 h-96 overflow-y-auto scrollbar-hide"
        >
          <p className="text-gray-500 text-sm mb-2">Generated Text</p>
          <p id="resultText" className="whitespace-pre-line"></p>
        </div>
        <input
          type="text"
          id="promptInput"
          className="w-full px-4 py-2 rounded-md dark:text-black bg-gray-200 placeholder-gray-500 focus:outline-none mt-4"
          placeholder="Enter prompt..."
        />
        <div className="flex justify-center mt-4">
          <button
            id="generateBtn"
            className="w-1/2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-900 focus:outline-none mr-2 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            Generate
          </button>
          <button
            id="stopBtn"
            disabled
            className="w-1/2 px-4 py-2 rounded-md  dark:text-gray-900 dark:bg-white   border-gray-500 text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none ml-2 disabled:opacity-75 disabled:cursor-not-allowed"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default AiResult;
