let title = document.getElementById("title");
let random = document.getElementById("footer");
const randomAns = [
  "You're not alone; I'm here for you.",
  "It's okay to not be okay. Take your time.",
  "You are stronger than you know, and this too shall pass.",
  "I believe in your strength to overcome this.",
  "You are valued and loved just as you are.",
  "I'm here to listen whenever you need to talk.",
  "You are not defined by your struggles; you're defined by how you overcome them.",
  "You have faced challenges before and come out stronger each time.",
  "It's okay to take small steps; progress is progress no matter how small.",
  "You are worthy of kindness, especially from yourself.",
  "You are resilient, and I admire your courage.",
  "Your feelings are valid, and it's okay to feel overwhelmed.",
  "I'm here to support you in any way I can.",
  "You have the strength within you to see this through.",
  "Remember to take care of yourself; self-care is important.",
  "I'm proud of you for facing each day with such bravery.",
  "You are not alone in this journey; we're in this together.",
  "It's okay to ask for help when you need it; reaching out shows strength.",
  "You are important, and your presence makes a difference.",
  "You are not your thoughts; you are much stronger than them.",
  "Even on the hardest days, know that I believe in your ability to heal.",
  "Your feelings are valid, and you deserve compassion.",
  "You are doing your best, and that is enough.",
  "I admire your resilience and perseverance.",
  "It's okay to rest when you need to; healing takes time.",
  "You are not alone in this; I'm here to support you.",
  "Take it one day at a time; progress is progress.",
  "I see your strength and admire your courage.",
  "You are not defined by your past; you have the power to shape your future.",
  "Your presence in this world makes it a better place.",
  "It's okay to seek help; reaching out is a sign of strength.",
  "You are deserving of love and support, especially from yourself.",
  "I'm here to remind you of your worth and strength.",
  "You are not alone; I'm here to walk this journey with you.",
  "You are capable of healing and finding peace.",
  "I'm proud of you for continuing to fight, even when it's hard.",
  "Your journey is unique, and you're making progress every day.",
  "It's okay to take breaks and prioritize your well-being.",
  "You are worthy of kindness and understanding.",
  "I believe in your ability to overcome this challenge.",
  "You are brave, strong, and capable of navigating through this.",
  "It's okay to ask for help; you don't have to face this alone.",
  "Your resilience inspires me; keep going.",
  "You are not alone in this struggle; I'm here to support you.",
  "You are loved, and your feelings matter.",
  "Take your time to heal; there's no rush.",
  "I admire your courage to face each day, despite the challenges.",
  "You are worthy of compassion, especially from yourself.",
  "Remember to be kind to yourself during this time.",
  "You are not defined by your struggles; you're defined by how you rise above them.",
  "Your strength and resilience are remarkable.",
  "I'm here to remind you that brighter days are ahead.",
  "You are strong enough to handle whatever comes your way.",
  "I believe in your ability to find peace and happiness again.",
  "You are not alone; I'm here to listen and support you.",
  "You are a fighter, and I'm here to cheer you on.",
  "You are worthy of love, kindness, and support.",
  "It's okay to prioritize your mental health and well-being.",
  "You have faced challenges before and emerged stronger each time.",
  "I'm here to support you through this; you're not alone.",
  "You are capable of overcoming this; I believe in you.",
  "Your strength and resilience inspire those around you.",
  "It's okay to take things one step at a time; progress is progress.",
  "I see your strength, and I'm here to support you on your journey.",
  "You are not alone in this; I'm here to walk alongside you.",
  "You are strong, brave, and capable of healing.",
  "I admire your strength and courage to face each day.",
  "You are valued and appreciated just as you are.",
  "Remember to be kind to yourself during this challenging time.",
  "You are not alone; reach out for support when you need it.",
  "You have the power within you to overcome this.",
  "I'm here to remind you of your worth and strength.",
  "You are stronger than you know, and you will get through this.",
  "It's okay to lean on others for support; you don't have to do this alone.",
  "Your journey is important, and you're not alone in it.",
  "You are worthy of love, compassion, and understanding.",
  "I believe in your ability to find peace and healing.",
  "You are not defined by your challenges; you're defined by how you rise above them.",
  "Your strength and resilience inspire those around you.",
  "I'm here to support you through this; you're not alone.",
  "You are capable of overcoming this; I believe in you.",
  "Your strength and resilience inspire those around you.",
  "It's okay to take things one step at a time; progress is progress.",
  "I see your strength, and I'm here to support you on your journey.",
  "You are not alone in this; I'm here to walk alongside you.",
  "You are strong, brave, and capable of healing.",
  "I admire your strength and courage to face each day.",
  "You are valued and appreciated just as you are.",
  "Remember to be kind to yourself during this challenging time.",
  "You are not alone; reach out for support when you need it.",
  "You have the power within you to overcome this.",
  "I'm here to remind you of your worth and strength.",
  "You are stronger than you know, and you will get through this.",
  "It's okay to lean on others for support; you don't have to do this alone.",
  "Your journey is important, and you're not alone in it.",
  "You are worthy of love, compassion, and understanding.",
  "I believe in your ability to find peace and healing.",
  "You are not defined by your challenges; you're defined by how you rise above them.",
];

document.getElementById("randomBtn").onclick = function () {
  const randomNum = randomAns[Math.floor(Math.random() * randomAns.length)];
  title.textContent = randomNum;

  randomBtn.textContent = "generate again";
};
