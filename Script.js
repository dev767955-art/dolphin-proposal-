const pages = [...document.querySelectorAll('.page')];
function showPage(id){
  pages.forEach(page => page.classList.toggle('active', page.id === id));
  window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('[data-go]').forEach(button=>{
  button.addEventListener('click',()=>showPage(button.dataset.go));
});

document.getElementById('openShayari').addEventListener('click',()=>{
  document.getElementById('shayariText').classList.remove('hidden');
});

const compliments = {
  '✨':'aapki cute si smile har baar mera mood aacha kar deti hai so, please smile karti raho',
  '😉':'tumhara awaz bahut pyara lagta hai so, please hamesha Sleeping rhyme sunaya karo',
  '🌷':'Tumse baat karne pe normal day bhi interesting hone lagta hai so, please hamesha baat kiya karo !',
  '🫶':'Aapka vibe bahut alag hii hai but bahut pyara hai !',
  '🙃':'Tumhare sath har normal conversation special lagta hai !',
  '🌹':'Tum jaisi bhi ho bahut special ho aur tum bilkul gullab jamun ki tarah hii sweet ho !'
};
document.querySelectorAll('[data-compliment]').forEach(button=>{
  button.addEventListener('click',()=>{
    document.getElementById('complimentText').textContent=compliments[button.dataset.compliment];
  });
});

document.getElementById('openLetter').addEventListener('click',()=>{
  document.getElementById('letterPaper').classList.remove('hidden');
  document.getElementById('letterPaper').scrollIntoView({behavior:'smooth',block:'start'});
});

const questions = [
  {q:'Where did we first meet?',o:['School ground mein','School ke bahar','Class mein','Van ke pass'],a:0},
  {q:'What is my favourite fast food?',o:['Samosa','Golgappa','French fries','Kurkure'],a:1},
  {q:'What is my dream destination?',o:['Gangtok','Ayodhya','Varanasi','Mumbai'],a:2},
  {q:'What is my favourite cold drink?',o:['Sprite','Campa','Pepsi','Diet Coke'],a:3},
  {q:'Your nickname based on a cold drink?',o:['Sprite','Campa','Pepsi','Mazza'],a:0},
  {q:'How long have we been friends (approximately)?',o:['1 year','Approx 6 months','8 months','3 weeks'],a:1},
  {q:'What do I like but you share rarely?',o:['Hoga kuch','Yaad nahi','Sleeping rhyme','Apna lunch'],a:2},
  {q:'What kind of conversations do I enjoy?',o:['Pata nahi','Boring','Sweet','Random, funny, cute and flirting'],a:3},
  {q:'Your smile makes me feel…',o:['Special feelings','Kuch nahi','Hoga kuch','Bekaar'],a:0},
  {q:'What is your best quality according to me?',o:['Gussa karna','Smile karna','Kuch bhi','Padhna'],a:1}
];
let score=0,answered=0;
const quizArea=document.getElementById('quizArea');
questions.forEach((item,index)=>{
  const card=document.createElement('div');card.className='question-card';
  const heading=document.createElement('h3');heading.textContent=`${index+1}. ${item.q}`;card.appendChild(heading);
  const feedback=document.createElement('div');feedback.className='feedback';
  item.o.forEach((option,i)=>{
    const btn=document.createElement('button');btn.className='option';btn.textContent=option;
    btn.addEventListener('click',()=>{
      if(card.dataset.done)return;
      card.dataset.done='true';answered++;
      if(i===item.a){score++;feedback.textContent="Wow, that's great! 💗";}
      else feedback.textContent="Oops, you're wrong. 🌷";
      [...card.querySelectorAll('.option')].forEach((b,j)=>{b.disabled=true;if(j===item.a)b.classList.add('selected');});
      if(answered===questions.length)scoreBox.textContent=`Your score: ${score} / 10 💗`;
    });
    card.appendChild(btn);
  });
  card.appendChild(feedback);quizArea.appendChild(card);
});
const scoreBox=document.createElement('div');scoreBox.className='score';scoreBox.textContent='Complete all 10 questions to see your score.';quizArea.appendChild(scoreBox);

const responses={
  yes:"Ohhhh!!! That's such a sweet surprise! 🥺💗 Thank you for sharing your feelings too. Let's take things one step at a time! 🌷🫶",
  time:"Of course! Take all the time you need. No pressure at all. Thank you for being honest. 💗",
  friend:"Thank you for being honest with me. I respect your feelings and value our friendship. No pressure, and I won't ask you to change your answer. 💗"
};
document.querySelectorAll('[data-answer]').forEach(button=>{
  button.addEventListener('click',()=>{
    const box=document.getElementById('answerMessage');
    box.textContent=responses[button.dataset.answer];
    box.classList.remove('hidden');
  });
});
