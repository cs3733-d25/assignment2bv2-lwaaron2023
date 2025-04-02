//import { useState } from 'react'
import './App.css'
import Title from "./title.tsx";
import Intro from "./intro.tsx";
import List from "./list.tsx";
import Hobby from "./hobby.tsx";




export default function App() {

    //Need to add this in a list: "1. Playing video games", "2. Playing the tenor saxophone", "3. Refurbishing computers for Charity"
    return (
    <div className={"app"} id = "root">
        <div className="section">
        <Title className={"CS3733-D25"} teamNumber = {68} hobbies = {["Refurbishing Computers For Charity","FILL ME IN"]}></Title>
        </div>
        <hr/>

        <div className="section">
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

        <div className="section">
        <Intro person={"Haotian Lui"} paragraph={[
            "FILL",
            "ME",
            "IN"
        ]}></Intro>
        </div>

        <hr/>
        <br/>
        <div className="section">
        <Hobby orderings={["header","image", "paragraph","list","table"]}
               forms={[]}
               headers={[{"num": 2,"text":"About My Hobby"}]}
               tables={[{
                   rows:[["Name", "Headquarters Locations", "What happens to donations"],
                       ["Computers4People","Hoboken, New Jersey","Sent to public schools and other organizations to combat lack of digital access"],
                       ["World Computer Exchange","Hull, Massachusetts","Sent to schools in Third World countries to help with education"],
                       ["Operation Sunflower","Ukraine","Sent to those affected by the conflict in Ukraine"],
                       ["Goodwill","Deerwood, Maryland","Don't know, assume sold and proceeds donated"]],
                   headerRow:0,
                   headerCol:-1,
                    caption:"Organizations I have worked with/donated to"}]}
               lists={[{contents:["Clean the outside of the computer (remove dirt and dust), while checking for missing pieces/damages",
                   "Attempt to turn on the computer, if it boots check the bios",
                   "If it does not boot, listen to beep codes (if possible) and check documentation",
                   "If it does not boot, and does not have beep codes, then open the computer and check the memory, then CPU, then GPU (if it has a Graphics Card)",
                   "Replace any damaged, or missing parts. Then replace parts that hinder computer from meeting basic qualifications",
                   "Install a fresh copy of either Windows 10 or a linux based distro"],
                   ordered:true}]}
               paragraphs={[{person:"",paragraph:["",
                       "During the pandemic I began to take apart discarded computers to see how they worked, and how to reassemble them.",
                       "Eventually, I became interested in how to troubleshoot the problems of the discarded computers.",
                       "Through a process of trial and error I was able to teach myself basic triaging skills in order to fix broken computers.",
                       "I then reached out to organizations such as Computers4People to try and connect with like-minded people while doing good in the world.",
                       "Through my experiences I have found that many people simply get rid of computers due to their age instead of trying to update or replace broken parts.",
                       "Over the past 3ish years, I have been able to refurbish between 150-200 computers",
                       "I have designed a general process for each repair:"]}]}
               imgs={[{src:"src/imgs/badMotherboard.jpg", alt:"Picture of Motherboard On Fire", width:640, height:640}]}></Hobby>

        <br/>
        </div>

        <hr/>

        <div className="section">
        <br/>
        <Hobby orderings={["header","form"]}
               forms={[{"orderings":["label","","input","","","label","","input","","","paragraph","input","label","","input","label","","input","label","","paragraph","input","label","","input","label","","input","label","","label","select","","","label","","","textarea","","","button"],
                   "paragraphs":[{"text":"Purpose of inquiry:"},{"text":"Preferred method of contact:"}],
                   "buttons":[{"type":"submit","value":"Submit","text":"Submit"}],
                   "inputs":[{"type":"text","id":"fullname","name":"","value":""},
                       {"type":"text","id":"email","name":"","value":""},
                       {"type":"checkbox","id":"learn","name":"","value":""},
                       {"type":"checkbox","id":"repairs","name":"","value":""},
                       {"type":"checkbox","id":"recommendations","name":"","value":""},
                       {"type":"radio","id":"first","name":"preference","value":"email"},
                       {"type":"radio","id":"second","name":"preference","value":"phone"},
                       {"type":"radio","id":"third","name":"preference","value":"other"}],
                   "labels":[{"intended":"fullname","text":"Enter your full name:"},
                       {"intended":"email","text":"Enter your email:"},
                       {"intended":"learn","text":"Learn about my other hobbies"},
                       {"intended":"repairs","text":"Computer repairs"},
                       {"intended":"recommendations","text":"Tech recommendations"},
                       {"intended":"first","text":"Email"},
                       {"intended":"second","text":"Phone"},
                       {"intended":"third","text":"Other"},
                       {"intended":"donations","text":"Do you have computers to donate:"},
                       {"intended":"comments","text":"Additional Comments:"}],

                   "selects":[{"name":"donations","id":"donations",options:[{"value":"yes","text":"Yes"},{"value":"no","text":"No"}]}],
                   "textareas":[{"rows":10,"cols":40,"id":"comments"}]}]}
               headers={[{"num": 2,"text":"Contact Me"}]}
               tables={[]}
               lists={[]}
               paragraphs={[]}
               imgs={[]}></Hobby>

        <br/>
        </div>
        <hr/>
    </div>
    )
}

/*

{}

 */