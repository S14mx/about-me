'use strict';

let username = prompt("Hello stranger, what is your name?"); // greeting prompt
      console.log("Nice to meet you " + username + ". Welcome to my page!");
      alert("Nice to meet you " + username + ". Welcome to my page! Please take a short quiz about me");
      
      let myName = prompt("Is my name Sergey?").toLowerCase() // question 1
        if (myName === "yes" || myName === "y") {
        alert("That is correct!")
        console.log("That is correct!");
        } else if(myName === "no" || myName === "n"){
          alert("Sorry, that is wrong. My name is Sergey")
          console.log("Sorry, that is wrong. My name is Sergey");
        } else {
          alert("Please answer \"Yes\" or \"No\"")
        }

      let from = prompt("Am I from Portland?").toLowerCase()  // question 2
        if (from === "no" || from === "n") {
        alert("That is correct! I am from Seattle")
        console.log("That is correct!");
        } else if(from === "yes" || from === "y"){
          alert("Sorry, that is wrong. I am from Seattle")
          console.log("Sorry, that is wrong. I am from Seattle");
        } else {
          alert("Please answer \"Yes\" or \"No\"")
        }
      
      let fromo = prompt("Was I born in Ukraine?").toLowerCase()  // question 3
        if (fromo === "yes" || fromo === "y") {
        alert("That is correct!")
        console.log("That is correct!");
        } else if(fromo === "no" || fromo === "n"){
          alert("Sorry, that is wrong. I was born in Ukraine")
          console.log("Sorry, that is wrong. I was born in Ukraine");
        } else {
          alert("Please answer \"Yes\" or \"No\"")
        }
      
      let cat = prompt("Do I have a cat?").toLowerCase()  // question 4
          if (cat === "yes" || cat === "y") {
          alert("That is correct! His name is Frodo")
          console.log("That is correct!");
        } else if(cat === "no" || cat === "n"){
          alert("Sorry, that is wrong. I do have a cat and his name is Frodo")
              console.log("Sorry, that is wrong. I do have a cat and his name is Frodo");
        } else {
          alert("Please answer \"Yes\" or \"No\"")
        }  
      
      let lang = prompt("Do I speak Spanish?").toLowerCase()  // question 5
        if (lang === "yes" || lang === "y") {
          alert("I wish I did! But unfortunately I don't")
          console.log("That is correct!");
        } else if(lang === "no" || lang === "n"){
          alert("You are right, I don't speak Spanish but I wish I did!")
          console.log("You are right, I don't speak Spanish but I wish I did!");
        } else {
          alert("Please answer \"Yes\" or \"No\"")
        }
      alert("Thanks for taking the quiz " + username + " . You did great");
      document.getElementById("greeting").innerHTML = "Welcome " + username + "!";