export const QUESTIONS = [
  {
    id:1,
    text: "When you face a challenge, you usually...",
    options: [
      {id:'a', text:"Take quiet time to think"},
      {id:'b', text:"Ask friends for help"},
      {id:'c', text:"Make a bold plan"},
      {id:'d', text:"Research and prepare"}
    ]
  },
  {
    id:2,
    text: "Your ideal weekend is...",
    options: [
      {id:'a', text:"Reading and reflection"},
      {id:'b', text:"Hanging out with friends"},
      {id:'c', text:"Exploring a new place"},
      {id:'d', text:"Learning a new skill"}
    ]
  },
  {
    id:3,
    text: "Pick the word that suits you most",
    options: [
      {id:'a', text:"Calm"},
      {id:'b', text:"Warm"},
      {id:'c', text:"Brave"},
      {id:'d', text:"Curious"}
    ]
  }
];

export const RESULT_MAP = {
  a: {type: "Quiet Phoenix", desc: "Calm, reflective, wise."},
  b: {type: "Kind Phoenix", desc: "Warm, social, supportive."},
  c: {type: "Brave Phoenix", desc: "Bold, adventurous."},
  d: {type: "Curious Phoenix", desc: "Inquisitive, studious."}
};
