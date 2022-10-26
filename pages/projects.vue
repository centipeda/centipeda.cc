<template>
  <div>
    <HeaderLink url="/projects" title="projects" />
    <Navbar/>
    <div class="px-5">
        <p>I'm interested in pretty much every kind of computing, but web-based projects are easy to get running and present, so I tend to do those. Some of them are: </p>
        <ul class="list-disc list-inside pl-2">
            <li>
                Of course, <a href="https://github.com/centipeda/centipeda.cc">this website</a>, made with Vue, Nuxt.js, and Tailwind CSS.
            </li>
            <li>
                <a href="https://spells.centipeda.cc">Virk's Spellbook</a>, a searchable spell description database and printable spell card 
                generator for spells from Dungeons and Dragons, 5th Edition.
            </li>
            <li>
                <a href="https://cnti.cc">cnti.cc</a>, my personal pastebin, made using Flask.
            </li>
            <li>
                <a href="https://github.com/centipeda/logician.py">Logician</a>, a Discord bot written in Python with cool features like dynamically generated color roles.
            </li>
        </ul>
        
        <br/>

        <p>Hackathons are also a lot of fun, so I have a lot of smaller hackathon projects from years gone by, mostly done with my team, <a href="https://github.com/open-source-grilled-cheese" target="_blank" rel="noopener noreferrer">The Open-Source Grilled Cheese</a>:</p>

        <ul class="list-disc list-inside pl-2">
            <li>
                <a href="https://github.com/open-source-grilled-cheese/eagle-eyes">Eagle Eyes</a> is an Android birdwatching app made in Flutter in 48 hours for 
                the 2022 University of Notre Dame Hesburgh Hackathon (<a href="https://hackathon.library.nd.edu/#winners">we placed first!</a>)
            </li>
            <li>
                We did an analysis of the 
                <a href="https://www.kaggle.com/osmi/mental-health-in-tech-2016">2016 OSMI Mental Health in Tech Survey</a> and 
                <a href="https://open-source-grilled-cheese.github.io/data-club-hackathon/">presented our findings as a website</a>
            </li>
            <li>
                We made <a href="https://github.com/open-source-grilled-cheese/new-perspective">New Perspectives</a>, a Chrome extension that used 
                IBM Watson to analyze news articles and find articles on the same topic from websites elsewhere on the internet that may have differing
                biases
            </li>
        </ul>
        
        <br/> <br/> <br/> <br/> <br/>
        <br/> <br/> <br/> <br/> <br/>
        <br/> <br/> <br/> <br/> <br/>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ProjectsPage'
}
</script>
