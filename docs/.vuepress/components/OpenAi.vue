<template>
  <div class="openai-response">
    <pre>{{ txtSrc }}</pre>
  </div>
</template>

<script>
export default {
  name: 'OpenAi',
  data() {
    return {
      txtSrc: `1. Aphex Twin - "Blackbox Life Recorder 21f"
2. Bicep - "Water"
3. Bonobo - "Rosewood"
4. The Chemical Brothers - "No Reason"
5. Justice - "Generator"
6. Moderat - "Fast Land"
7. Röyksopp - "Sorry"
8. TSHA - "Water"
9. Fred again.. - "Rumble"
10. Fatboy Slim - "Right Here, Right Now" (Remix)`
    };
  }
};
</script>
