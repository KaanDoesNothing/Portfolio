<script lang="ts">
  import UICard from "./ui/card.vue";
  export default {
    components: {
      UICard
    },
    setup() {
      const projects = [
        {
          name: "CDN",
          technologies: ["Node.js"],
          role: "Creator",
          active: "2022",
          links: {
            website: "https://cdn.kaanlikescoding.me",
            github: "https://github.com/KaanDoesNothing/CDN"
          }
        },
        {
          name: "TruckersHub",
          technologies: ["Node.js", "Vue.js", "Socket.io"],
          role: "Creator",
          active: "2022",
          links: {
            website: "https://truckershub.kaanlikescoding.me",
            github: "https://github.com/KaanDoesNothing/TruckersHub"
          }
        },
        {
          name: "Vortex",
          role: "Creator",
          technologies: ["Node.js", "Vue.js", "Discord.js"],
          active: "2019",
          links: {
            website: "https://vortex.kaanlikescoding.me",
            github: "https://github.com/KaanDoesNothing/Kyra"
          }
        },
        {
          name: "FitnessTracker",
          role: "Creator",
          technologies: ["Node.js", "Vue.js", "Compactor"],
          active: "2022",
          links: {
            website: "https://fitness.kaanlikescoding.me",
            github: "https://github.com/KaanDoesNothing/Fitness-Tracker-Frontend"
          }
        },
        {
          name: "DiscordBotsList.us.to",
          role: "Took the ownership",
          technologies: ["Node.js", "Vue.js"],
          active: "2019 - 2021",
          links: {
            website: "https://discordbotslist.us.to",
            github: "https://github.com/KaanDoesNothing/DiscordBotsList.us.to"
          }
        }
      ]

      return {projects};
    }
  }
</script>

<template>
  <div>
    <div class="h-100 bg-gray-700">
      <div class="flex flex-col justify-center items-center h-100 text-white text-center p-5">
        <label class="text-4xl font-mono">Welcome to my Portfolio</label>
        <label class="font-mono">Made with <font-awesome-icon icon="fa-solid fa-heart" /> By Kaan</label>

        <div class="mt-10">
          <div class="inline-flex">
            <a class="p-2" href="https://github.com/KaanDoesNothing">
              <font-awesome-icon icon="fa-brands fa-github" class="h-10"/>
            </a>
            <a class="p-2" href="https://gitlab.com/Kaan075">
              <font-awesome-icon icon="fa-brands fa-gitlab" class="h-10"/>
            </a>
            <a class="p-2" href="https://www.npmjs.com/~kaan075">
              <font-awesome-icon icon="fa-brands fa-npm" class="h-10"/>
            </a>
            <a class="p-2" href="https://discord.com/users/208948873433972737">
              <font-awesome-icon icon="fa-brands fa-discord" class="h-10"/>
            </a>
          </div>
        </div>

        <div class="flex flex-col mt-3">
          <label class="text-xl font-mono">Let me quickly introduce myself!</label>
          <label>My name is Kaan, I'm 18 years old and live in The Netherlands</label>
          <label>I love to workout and work on projects in my spare time</label>
          <label>Feel free to take a look around!</label>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <div class="text-center">
        <h1 class="text-4xl font-mono">Information</h1>
      </div>
    </div>

    <div class="p-10 flex justify-center align-center">
      <UICard title="Studies" width="w-90">
        <div class="flex flex-col">
          <label>MBO 1 At ROC Op Maat West 2021 - 2022</label>
        </div>
      </UICard>
    </div>
    
    <div class="mt-10">
      <div class="text-center">
        <h1 class="text-4xl font-mono">Experience</h1>
      </div>
    </div>

    <div class="p-10 flex justify-center">
      <div class="grid lg:grid-cols-4 gap-4">
        <UICard title="Languages">
          <div class="flex flex-col">
            <label>Typescript</label>
            <label>Javascript</label>
            <label>HTML</label>
            <label>CSS</label>
            <label>SCSS</label>
          </div>
        </UICard>

        <UICard title="Databases">
          <div class="flex flex-col">
            <label>MySQL</label>
            <label>MariaDB</label>
            <label>MongoDB</label>
            <label>RethinkDB</label>
          </div>
        </UICard>

        <UICard title="UI Frameworks">
          <div class="flex flex-col">
            <label>Vue.js</label>
            <label>React / Native</label>
            <label>Svelte</label>
            <label>Pug</label>
            <label>EJS</label>
            <label>Handlebars</label>
            <label>Mustache</label>
            <label>Electron</label>
          </div>
        </UICard>

        <UICard title="CSS Frameworks">
          <div class="flex flex-col">
            <label>Tailwind</label>
            <label>Bootstrap 4/5</label>
            <label>Daisyui</label>
            <label>Bulma</label>
            <label>Quasar</label>
            <label>Semantic UI</label>
            <label>Fomantic UI</label>
          </div>
        </UICard>

        <UICard title="Node.js Frameworks">
          <div class="flex flex-col">
            <label>Express</label>
            <label>Koa</label>
            <label>Polka</label>
            <label>Next.js</label>
            <label>Nuxt.js</label>
            <label>Typeorm</label>
          </div>
        </UICard>

        <UICard title="Server Technologies">
          <div class="flex flex-col">
            <label>Ubuntu Server</label>
            <label>Fedora Server</label>
            <label>Debian Server</label>
            <label>CentOS</label>
            <label>Wine</label>
            <label>Docker</label>
          </div>
        </UICard>

        <UICard title="CLI Tools">
          <div class="flex flex-col">
            <label>Git</label>
            <label>WSL</label>
            <label>Chocolatey</label>
            <label>Bash</label>
            <label>Powershell</label>
          </div>
        </UICard>

        <UICard title="Web Automation / Scraping">
          <div class="flex flex-col">
            <label>Puppeteer</label>
            <label>Playwright</label>
          </div>
        </UICard>
      </div>
    </div>

    <div class="mt-10">
      <div class="text-center">
        <h1 class="text-4xl font-mono">Projects</h1>
      </div>
    </div>

    <div class="p-10 flex justify-center">
      <div class="grid lg:grid-cols-2 gap-4">
        <div class="bg-gray-50 w-90" v-for="project in projects">
          <div class="p-2 bg-gray-900 text-center">
              <label class="text-white font-mono font-bold">{{project.name}}</label>
          </div>
          <div>
            <div class="p-5 flex flex-col">
              <label>Role: {{project.role}}</label>
              <label>Active: {{project.active}}</label>
              <label>Technologies: {{project.technologies.join(", ")}}</label>
            </div>

            <div class="bg-gray-900 w-90 p-1 text-white text-center align-bottom">
              <a :href="project.links.website" class="text-white p-1 m-1 rounded">Website</a>
              <a :href="project.links.github" class="text-white p-1 m-1 rounded">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
  <!-- <div class="p-5">
    <h1>Projecten</h1>

    <div class="p-5 bg-dark-200">
      <ul>
        <li>TruckersHub.kaanlikescoding.me - 2022, Een digitale logboek voor een spel genaamd Euro Truck Simulator2 die kan worden gebruikt bij virtuele truck bedrijven, je kan de gereden vrachten zien, welke tolwegen je gepakt hebt, de hoeveelheid boetes en waar</li>
        <li>DiscordBotsList.us.to - 2019 - 2021, Een website waar developers zich konden aanmelden met hun Discord(Online chat) bot project om hun project publiciteit te geven, Ik heb het project overgenomen en herschreven nadat de eigenaar geen tijd meer had om er aan te werken, Ik heb er door geleerd samen te werken met andere aan een project als teamleider</li>
        <li>Vortex - 2018, een Discord(Online chat) bot die helpt met het behouden van je chat groep, heeft dingen zoals woorden blacklist, moderation tools en je kan er muziek mee luisteren in een audio chat</li>
        <li>Nog meer kleine projecten</li>
        <li></li>
      </ul>
    </div>
  </div>

  <div class="p-5">
    <h1>Technologiën</h1>

    <div class="p-5 bg-dark-200">
      <ul>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>HTML, CSS, SCSS</li>
        <li>JSON</li>
        <li>Database: MongoDB, RethinkDB, MySQL/MariaDB</li>
        <li>UI Frameworks, Vue.js, React, React native, Svelte, Pug, Ejs, Handlebars, Mustache, Electron</li>
        <li>SSR Frameworks, Next.js, Nuxt.js, Express, Polka</li>
        <li>CSS Frameworks, Tailwind, Bootstrap 4/5, Daisyui, Bulma, Quasar, Semantic UI, Fomantic UI</li>
        <li>CMD, Bash, WSL, Powershell, Chocolatey</li>
        <li>Website Automation / Scraper</li>
        <li>Linux(Ubuntu, Centos, Debian, Fedora, Manjaro) Server, Wine, Docker</li>
        <li>Github, Gitlab, </li>
      </ul>
    </div>
  </div>

  <div class="p-5">
    <h1>Werk ervaring</h1>

    <div class="p-5 bg-dark-200">
      <ul>
        <li>Delicious & Healthy Bezorger - 2021 3 maanden</li>
        <li>Stage fietsfactory krommenie - 2021 1 maand</li>
        <li>Stage ROC Op Maat West Krommenie Keuken(Omdat techniek niet beschikbaar was ivm corona) - 2021 6 maanden</li>
      </ul>
    </div>
  </div>

  <div class="p-5">
    <h1>Opleiding</h1>

    <div class="p-5 bg-dark-200">
      <ul>
        <li>MBO 1 - 2021 - 2022 (ROC Op Maat West)</li>
      </ul>
    </div>
  </div> -->
</template>