const quizeData=[
    {
        question:'How old is Florin',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'c'
    },{
        question:'What is the most used pp language',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'a'
    },{
        question:'who is president of us?',
        a:'Florin pop',
        b:'Donald Trump',
        c:'Tom',
        d:'Jerry',
        correct:'b'
    },{
        question:'ehat does HTML stands for',
        a:'Hyper Text Markup Language',
        b:'Style sheet',
        c:'Json',
        d:'Object notaion',
        correct:'a'
     
    },{
        question:'What year was JavaScript was launched',
        a:'2020',
        b:'2018',
        c:'2017',
        d:'1995',
        correct:'d'
    
    }

];

const questionE1=document.getElementById('question');
 const a_text=document.getElementById("a_text");
 const b_text=document.getElementById('b_text');
 const c_text=document.getElementById('c_text');
 const d_text=document.getElementById('d_text');
 const submitBtn=document.getElementById("sub")
let currentQuiz=0;

loadQuize();
function loadQuize(){
    const currentQuizData=quizeData[currentQuiz];

    questionE1.innerHTML=currentQuizData.
    question;
    a_text.innerHTML=currentQuizData.a;    
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
    currentQuestion++;

    }
     