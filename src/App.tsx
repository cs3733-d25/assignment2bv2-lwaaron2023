//import { useState } from 'react'
import './App.css'
import Title from "./title.tsx";
import Intro from "./intro.tsx";




export default function App() {


    return (
    <div className={"app"} id = "root">
        <Title className={"CS3733-D25"} teamNumber = {68} hobbies = {["Refurbishing Computers For Charity","FILL ME IN"]}></Title>
        <Intro person = {"Aaron"} paragraph={
            ["My name is Aaron Waller, and I am a sophomore at WPI.",
                "I am currently studying for a Computer Science major.",
                "I am from Needham, MA. I graduated from Needham High School in 2023.",
                "I have many hobbies including (but not limited to):",
                "1. Playing video games",
                "2. Playing the tenor saxophone",
                "3. Refurbishing computers for Charity",
                "I have an older and younger brother.",
                "My older brother is 23 years old, and my younger brother is 15 years old.",
                "My older brother is a BU graduate, and my younger brother is currently a freshman at Needham High School."]
        }></Intro>
        <Intro person={"FILL ME IN"} paragraph={[
            "FILL",
            "ME",
            "IN"
        ]}></Intro>
    </div>
    )
}


