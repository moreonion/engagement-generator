<template>
  <div id="page">

    <TheHeader />

    <section id="main">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-9 large-7 intro">
            <h1>Engagement action idea generator</h1>
            <p>Build rich and interesting experiences for your supporters!</p>
            <p>An engagement action is a way to actively involve your supporters that isn't a campaigning or donation action. They can achieve a number of audience-focused objectives such as building knowledge of an issue, building empathy, commitment and much more. This idea generator can help you spark new ideas or reshape old ones. Click 'generate a new idea' to randomly generate a new objective and engagement action.</p>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">

          <div id="content" class="cell large-7">
            <slot />
          </div>

          <div class="sidebar show-for-large cell large-5">
            <slot name="sidebar" />
          </div>

        </div>
      </div>
    </section>

    <slot name="sidebar" />

    <TheBottomSection />

    <TheFooter />


  </div>
</template>

<style lang="scss">
#main {
  overflow: initial; // To make position: sticky work on the sidebar.
  background-image: url(https://assets.impact-stack.org/mo7/v1/background__engagement_action_generator.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;

  .intro {
    padding-bottom: 3.3rem;
  }
}
</style>
