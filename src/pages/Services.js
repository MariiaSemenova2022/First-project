import React from "react";

function About() {
    return (
      <div className="content">
         <article>
        <h2>Cooking Master class</h2>
        <img src={require("../images/logo2.png")} className="logo" alt="" />
        <p>
          Little ones gain confidence in the kitchen with engaging and enriching
          our cooking classes, which focus on diverse and creative recipes. Kids
          as well as adults can learn how to make classic favorites like chicken
          fingers, waffles, and chocolate chip cookie pie, and more. Each dish
          includes a recipe sheet with ingredients, equipment needs, procedures,
          and tips on how to get kids involved in the cooking process. Cooking
          with your kids can be an extremely joyous and fun time. Classes taught
          under the supervision of our experiences and friendly staff. Kids with
          develop essential skills for hand motility, while baking, and enjoying
          creative process.
        </p>
        </article>
        <article>
        <h2>Soap bubbles</h2>
        <img src={require("../images/logo3.png")} className="logo" alt="" />
        <p>
          Bubbles fascinate both children and adults with their beautiful shapes
          and colours. Bubbles are a wonderful activity to keep kids busy and
          learning in a simple and exciting way. Children of all ages love to
          play with bubbles and we can do a few simple things to educate them,
          and ourselves, as we play together. Bubbles can be a wonderful and fun
          activity for the whole family to enjoy. But when playing with bubbles
          with babies, especially when introducing your little explorers to
          bubbles for the first time, there are specific things to consider to
          help keep your little ones safe and our staff will take care of it.
        </p>
        </article>
        <article>
        <h2>Kid's Paradise</h2>
        <img src={require("../images/logo4.png")} className="logo" alt="" />
        <p>
          Kids Enjoy Our Indoor Play Structure, and Parents Enjoy the
          Relaxation. A Safe, Clean, and Fun Environment for Everyone to
          Enjoy.Let the kids run wild while you enjoy some time with friends or
          play along with your kids in the Kids-themed indoor playground. We
          have something for every child to enjoy from babies to toddlers and
          even into pre-teens. Our play structures combine everything fun about
          playing on the playground with the comfort and safety of being inside.
          Most areas of our structures are well padded to help prevent any
          injuries and to give kids a more comfortable space to play in.
        </p>
        </article>
        </div>
    )
}

export default About;