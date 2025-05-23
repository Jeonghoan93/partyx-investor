<script setup lang="ts">
import { useDisplay } from 'vuetify'

import {
  fundUsage,
  focusIcons,
  roadmapFocus,
  marketInsights,
  missions
} from './constants'

const expandedIndex = ref<number | null>(null)

const toggleExpand = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}

const getShortDescription = (description: string, maxLength = 50): string => {
  if (description.length <= maxLength) {
    return description
  }
  // Find the last space within the maxLength to avoid cutting words
  const lastSpaceIndex = description.lastIndexOf(' ', maxLength)
  return (
    description.substring(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) +
    '...'
  )
}

const { xs } = useDisplay()

const showPartyXVisionDialog = ref(false)
</script>

<template>
  <Navbar />

  <v-container class="bg-gray-6 mt-[60px] flex flex-col gap-10">
    <!-- Hero Section -->
    <section class="pt-16">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" class="text-center">
          <div class="mb-10">
            <span class="text-gradient text-h2 my-6"> Build New Religion </span>
          </div>

          <div class="flex flex-col gap-2">
            <span class="text-light-1 text-body-1 font-cute">
              Export Berlin to the World, Authenticy and Love.
            </span>
            <span class="text-light-1 text-body-1 font-cute">
              We are Genghis Khan
              <span class="text-light-2 text-sm"
                >( Former Khagan of the Mongol Empire )
              </span>
              prepared for the cultural conquest.
            </span>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- Mission Section -->
    <section class="py-12">
      <h2 class="text-h4 font-weight-bold mb-8 text-center text-light-1">
        Missions
      </h2>

      <v-row>
        <template v-for="(mission, key) in missions" :key="key">
          <v-col cols="12" md="4">
            <v-card class="bg-dark-4 rounded-xl overflow-hidden" elevation="10">
              <div class="card-header-with-bg">
                <v-img
                  :src="mission.img"
                  height="276"
                  cover
                  class="card-bg-image"
                >
                  <div class="overlay overlay-general">
                    <div class="flex flex-col pa-5">
                      <div class="flex flex-col gap-1">
                        <span class="text-h5 text-white font-cute">
                          {{ mission.title }}</span
                        >

                        <span class="text-sm text-grey-lighten-2 mt-2">
                          {{ mission.subtitle }}
                        </span>
                      </div>

                      <span class="text-sm text-white mt-4">
                        {{ mission.body }}
                      </span>
                    </div>
                  </div>
                </v-img>
              </div>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </section>

    <!-- About Section -->
    <section class="py-12 rounded-lg">
      <v-row align="center" class="pa-10">
        <v-col cols="12" md="5">
          <v-img
            src="/assets/images/main.jpeg"
            class="rounded-xl"
            alt="Founder Photo"
            cover
          ></v-img>
        </v-col>

        <v-col cols="12" md="7">
          <h2 class="text-h4 font-cute mb-6 text-light-1">Founder</h2>

          <p class="text-light-2 text-body-1 mb-4">
            I’m Jimmy. I build PartyX by raving, talking to strangers, coding
            with hangovers, and listening more than I speak.
          </p>
          <p class="text-light-2 text-body-1 mb-4">
            Parties are the last real democracy. No titles, no bosses — just
            basslines and truth. This isn’t just an app. It’s a system for human
            connection. A rebellion disguised as nightlife.
          </p>
        </v-col>
      </v-row>
    </section>

    <!-- Market Opportunity Section -->
    <section class="py-6">
      <h2 class="text-h4 mb-6 text-light-1 font-cute">Market Opportunity</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="bg-dark-4 rounded-xl h-100" elevation="10">
            <v-card-text class="pa-6">
              <h3 class="text-h5 font-weight-bold text-light-1 mb-4">
                The Problem
              </h3>
              <p class="text-light-2 mb-4">
                They sell you a ticket and ghost you. You end up alone in a
                crowd, no map for what’s next. No one checks in. No one cares.
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="bg-dark-4 rounded-xl h-100" elevation="10">
            <v-card-text class="pa-6">
              <h3 class="text-h5 font-weight-bold text-light-1 mb-4">
                The PartyX Way
              </h3>

              <p class="text-light-2 mb-4">
                We don’t dip when the music drops. We ride the night with you —
                before, during, after. Safety check-ins, chill spot guides,
                reconnection tools. The best nights don’t end. Neither do we.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Why now -->
    <section class="py-6">
      <h2 class="text-h4 mb-6 text-light-1 font-cute">Why now?</h2>

      <div class="text-white">
        As machines get smarter, the hunger for something real gets louder.
        We’re not a tech startup. We’re cultural infrastructure — built for
        chaos, sweat, and connection. While others optimize control, we design
        for freedom.
      </div>
    </section>
  </v-container>

  <v-container class="bg-gray-6 mt-[60px] flex flex-col gap-10">
    <!-- Call to Action -->

    <section class="py-8 mb-10">
      <v-card class="bg-dark-3 rounded-xl overflow-hidden" elevation="15">
        <div class="card-header-with-bg">
          <v-img src="/assets/images/techno.jpg" :height="xs ? 455 : 275" cover>
            <div class="overlay overlay-general">
              <v-container
                class="d-flex flex-column justify-center align-center text-center h-100"
              >
                <p
                  class="text-white text-body-1 mb-8 max-w-xl mx-auto font-cute"
                >
                  We’re not chasing capital. We’re inviting alignment. If this
                  vision sparks something in you — let’s build it together. If
                  not, no worries. We’re building it either way.
                </p>

                <div class="d-flex justify-center gap-4 flex-wrap">
                  <v-btn
                    variant="outlined"
                    size="large"
                    class="text-none px-6 hover:scale-105"
                    elevation="0"
                    rounded="pill"
                    color="white"
                    @click="onClickVisitPartyX"
                  >
                    <v-icon start>mdi-open-in-new</v-icon>

                    <span class="hover:scale-105"> See product </span>
                  </v-btn>

                  <v-btn
                    variant="outlined"
                    size="large"
                    class="text-none px-6 hover:scale-105"
                    elevation="0"
                    rounded="pill"
                    color="white"
                    @click="onClickNavigateToLinkedin"
                  >
                    <v-icon start>mdi-linkedin</v-icon>
                    <span class="hover:scale-105"> LinkedIn </span>
                  </v-btn>
                </div>
              </v-container>
            </div>
          </v-img>
        </div>
      </v-card>
    </section>
  </v-container>

  <v-dialog v-model="showPartyXVisionDialog" max-width="750px" scrollable>
    <v-card class="bg-dark-5">
      <v-card-text>
        <div class="pa-3 text-caption d-flex flex-column ga-2 text-light-2">
          <span class="font-weight-bold text-blue-lighten-3"
            >Market Context:</span
          >
          <span
            >Derived from the substantial Recreation & Culture market across key
            regions (EU, USA, Korea, Japan), estimated at ~€626 billion annually
            (based on 2020 household spending data).</span
          >

          <span class="font-weight-bold text-blue-lighten-3"
            >Baseline Potential (80B+):</span
          >
          <span
            >Represents projected annual revenue capture within the
            current/near-term market structure.</span
          >

          <span class="font-weight-bold text-blue-lighten-3"
            >Future Potential (Up to 200B+ - AI-Impact Scenario):</span
          >
          <span>
            <span class="font-weight-medium">Why the jump?</span>
            This higher projection (€200B+) anticipates significant future
            economic and societal shifts primarily driven by
            <span class="font-weight-medium">widespread AI adoption</span>. Key
            contributing factors under this scenario include:
          </span>
          <ul class="pl-4">
            <li>
              <span class="font-weight-medium"
                >AI-Driven Economic Changes:</span
              >
              Potential government responses ('General Income'/UBI) to mitigate
              AI's impact on employment, potentially stabilizing or increasing
              consumer spending power.
            </li>
            <li>
              <span class="font-weight-medium"
                >Increased Disposable Income:</span
              >
              AI-driven efficiencies leading to cost reductions in essential
              goods/services, freeing up funds for experiences.
            </li>
            <li>
              <span class="font-weight-medium">Evolving Social Needs:</span>
              A potential increase in demand for authentic human connection and
              shared experiences as society adapts to AI's prevalence.
            </li>
          </ul>
          <span
            >Achieving this €200B+ potential hinges on navigating these complex,
            AI-influenced future transitions successfully.</span
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
/* global background color */
body {
  background-color: #1c1c1e;
}

/* target the root div (v-app) */
.v-application {
  background-color: #1c1c1e;
}

:root {
  /* Gray Scale from the provided colors */
  --color-gray-1: #8e8e93;
  --color-gray-2: #636366;
  --color-gray-3: #48484a;
  --color-gray-4: #3a3a3c;
  --color-gray-5: #2c2c2e;
  --color-gray-6: #1c1c1e;

  /* Accent colors */
  --color-blue: #0a84ff;
  --color-blue-dark: #0066cc;
  --color-blue-accent: #36a3ff;
  --color-purple: #bf5af2;
  --color-purple-dark: #9945c7;
  --color-gold: #ffd60a;
  --color-gold-dark: #e6b800;
}

/* Background Classes */
.bg-dark {
  background-color: var(--color-gray-6) !important;
}
.bg-dark-5 {
  background-color: var(--color-gray-5) !important;
}
.bg-dark-4 {
  background-color: var(--color-gray-4) !important;
}

/* Text Colors */
.text-light-1 {
  color: #ffffff !important;
}
.text-light-2 {
  color: rgba(255, 255, 255, 0.8) !important;
}
.text-dark-6 {
  color: var(--color-gray-6) !important;
}
.text-blue {
  color: var(--color-blue) !important;
}
.text-blue-accent {
  color: var(--color-blue-accent) !important;
}
.text-purple {
  color: var(--color-purple) !important;
}
.text-gold {
  color: var(--color-gold) !important;
}

/* Text Gradient */
.text-gradient {
  background: linear-gradient(135deg, var(--color-gold), var(--color-blue));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

/* Custom Styles */
ul {
  list-style-type: none;
  padding-left: 8px;
}

ul li {
  position: relative;
  padding-left: 16px;
}

ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-blue);
}

/* Card headers with background images */
.card-header-with-bg {
  position: relative;
}

.card-bg-image {
  height: 140px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px;
  backdrop-filter: blur(1px);
}

/* Optimized overlay gradients for better text visibility */
.overlay-general {
  background: linear-gradient(
    135deg,
    rgba(10, 12, 02, 0.48),
    rgba(0, 21, 26, 0.87)
  ) !important;
}
</style>
