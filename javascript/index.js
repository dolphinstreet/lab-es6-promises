// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
 //getInstruction("mashedPotatoes", 0, (step1) => {
 //  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
 //}, (error) => console.log(error));
 //
 //getInstruction("mashedPotatoes", 1, (step2) => {
 //  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
 //}, (error) => console.log(error));
 //
 //getInstruction("mashedPotatoes", 2, (step3) => {
 //  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
 //}, (error) => console.log(error));
 //
 //getInstruction("mashedPotatoes", 3, (step4) => {
 //  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
 //}, (error) => console.log(error));
 //
 //getInstruction("mashedPotatoes", 4, (step5) => {
 //  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
 //  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
 //}, (error) => console.log(error));

const steakImg = document.getElementById("steakImg")
const potatoImg = document.getElementById("mashedPotatoesImg")
const broccoliImg = document.getElementById("broccoliImg")
const sproutsImg = document.getElementById("brusselsSproutsImg")


// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          potatoImg.removeAttribute("hidden")

        });
      });
    });
  });
});


// Iteration 2 - using promises

steak.push("Steak is ready!");

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction('steak', 1)
      .then( (step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
        obtainInstruction('steak', 2)
          .then( (step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
            obtainInstruction('steak', 3)
            .then( (step3) => {
              document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
              obtainInstruction('steak', 4)
              .then( (step4) => {
                document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
                obtainInstruction('steak', 5)
                .then( (step5) => {
                  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                  obtainInstruction('steak', 6)
                  .then( (step6) => {
                    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                    obtainInstruction('steak', 7)
                    .then( (step7) => {
                      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                      obtainInstruction('steak', 8)
                      .then( (step8) => {
                        document.querySelector("#steak").innerHTML += `<li>${step8}</li>`
                        steakImg.removeAttribute("hidden")
                      })
                      .catch((error) => console.log(error))
                    })
                    .catch((error) => console.log(error))
                  })
                  .catch((error) => console.log(error))
                })
                .catch((error) => console.log(error))
              })
              .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
  })
.catch((error) => console.log(error));


// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    for (let i=0;i<broccoli.length;i++){
      let res = await obtainInstruction('broccoli', i )
      let instruction = broccoli[i]
      document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`
    }
    broccoliImg.removeAttribute("hidden")
  }catch (error){
    console.log(error)
  }
}
broccoli.push("Broccoli are ready!");
makeBroccoli()


// Bonus 2 - Promise all
const arrayOfPromises = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
  obtainInstruction('brusselsSprouts', 8)
]

Promise.all(arrayOfPromises).then((instruction) => {
  for (let i =0; i<arrayOfPromises.length;i++){
    const line = instruction[i]
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${line}</li>`
  }
  sproutsImg.removeAttribute("hidden") 
})

brusselsSprouts.push("Brussel sprouts are ready!");

