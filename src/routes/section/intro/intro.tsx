import { component$ } from "@builder.io/qwik";
import Beaming from "/public/media/fluent/beaming_face_with_smiling_eyes_color.svg?jsx";
import { Animate } from "~/components/qwik-animate/animate";
// First section | Introducing Axel

export default component$(() => {
  return (
    <section id="intro" class="container">
      <div class="bio">
        <Animate
          class="info"
          animationOptions="@sl-y!_ease-out-back_child-ascend-up_lv-down+++_delay-6 @fd"
        >
          <h1>
            Hey{" "}
            <span class="emoji">
              <Beaming />
            </span>
            ! I am
          </h1>
          <h1>Axel RAKOTOARIVAO,</h1>
          <h1>a Front End Developer</h1>
          <p>
            My focus is crafting smooth user experiences and designing
            interfaces that feel natural and intuitive.
          </p>
          <a href="#form">Contact me</a>
        </Animate>
      </div>

      {/* // rectangles background */}
      <div class="patern">
        <Animate
          class="parent-box"
          animationOptions="@sc-in_child-ascend-down+++"
        >
          <div class="box"></div>
        </Animate>
        <Animate
          class="parent-box"
          animationOptions="@sc-in_child-ascend-down+++"
        >
          <div class="box"></div>
          <div class="box"></div>
        </Animate>
        <Animate
          class="parent-box"
          animationOptions="@sc-in_child-ascend-down+++"
        >
          <div class="box"></div>
          <div class="box"></div>
          <div class="box"></div>
        </Animate>
        <Animate
          class="parent-box"
          animationOptions="@sc-in_child-ascend-down+++"
        >
          <div class="box"></div>
          <div class="box"></div>
        </Animate>
        <Animate
          class="parent-box"
          animationOptions="@sc-in_child-ascend-down+++"
        >
          <div class="box"></div>
        </Animate>
      </div>
    </section>
  );
});
