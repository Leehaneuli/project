import React from "react";
import Book from "./Book";

export default function Library(props){
    return(
        <div>
            <Book name="처음 만나 파이썬" numOfPage={300}></Book>
            <Book name="처음 만난 AWS" numOfPage={400}></Book>
            <Book name="처음 만난 리액트" numOfPage={500}></Book>
        </div>
    );
}
