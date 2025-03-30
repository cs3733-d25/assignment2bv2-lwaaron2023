//import { useState } from 'react'
import './App.css'
import Title from "./title.tsx";
import Intro from "./intro.tsx";
import List from "./list.tsx";
import Form from "./form.tsx";




export default function App() {

    //Need to add this in a list: "1. Playing video games", "2. Playing the tenor saxophone", "3. Refurbishing computers for Charity"
    return (
    <div className={"app"} id = "root">
        <div className={"segment"}>
        <Title className={"CS3733-D25"} teamNumber = {68} hobbies = {["Refurbishing Computers For Charity","FILL ME IN"]}></Title>
        </div>
        <hr/>
        <div className={"segment"}>
        <Intro person = {"Aaron Waller"} paragraph={
            ["My name is Aaron Waller, and I am a sophomore at WPI.",
                "I am currently studying for a Computer Science major.",
                "I am from Needham, MA. I graduated from Needham High School in 2023.",
                "I have many hobbies including (but not limited to):",
                ]
        }></Intro>
        <List contents={["Playing video games", "Playing the tenor saxophone", "Refurbishing computers for Charity"]} ordered = {false}></List>
        <Intro person={""} paragraph={[
            "I have an older and younger brother.",
            "My older brother is 23 years old, and my younger brother is 15 years old.",
            "My older brother is a BU graduate, and my younger brother is currently a freshman at Needham High School."
        ]}></Intro>
        </div>
        <hr/>
        <div className={"segment"}>
        <Intro person={"Haotian Lui"} paragraph={[
            "FILL",
            "ME",
            "IN"
        ]}></Intro>
        </div>
        <hr/>
        <br/>
        <div className={"segment"}>

        </div>
    </div>
    )
}

/*

{"orderings" ={["label","","input","","","label","","input","","","paragraph","input","label","","input","label","","input","label","","paragraph","input","label","","input","label","","input","label","","label","select","","","label","","","textarea","","","button"]}
            "paragraphs" ={[{"text":"Purpose of inquiry:"},{"text":"Preferred method of contact:"}]}
            "buttons"={[{"type":"submit","value":"Submit","text":"Submit"}]}
            "inputs"={[{"type":"text","id":"fullname","name":"","value":""},
                  {"type":"text","id":"email","name":"","value":""},
                  {"type":"checkbox","id":"learn","name":"","value":""},
                  {"type":"checkbox","id":"repairs","name":"","value":""},
                  {"type":"checkbox","id":"recommendations","name":"","value":""},
                  {"type":"radio","id":"first","name":"preference","value":"email"},
                  {"type":"radio","id":"second","name":"preference","value":"phone"},
                  {"type":"radio","id":"third","name":"preference","value":"other"}]}
            "labels"={[{"intended":"fullname","text":"Enter your full name:"},
                  {"intended":"email","text":"Enter your email:"},
                  {"intended":"learn","text":"Learn about my other hobbies"},
                  {"intended":"repairs","text":"Computer repairs"},
                  {"intended":"recommendations","text":"Tech recommendations"},
                  {"intended":"first","text":"Email"},
                  {"intended":"second","text":"Phone"},
                  {"intended":"third","text":"Other"},
                  {"intended":"donations","text":"Do you have computers to donate:"},
                  {"intended":"comments","text":"Additional Comments:"}]}

              "selects"={[{"name":"donations","id":"donations",options:[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]}]}
              "textareas"={[{"rows":10,"cols":40,"id":"comments"}]}}

 */