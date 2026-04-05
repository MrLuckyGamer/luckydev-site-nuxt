<template>
  <div>
    <!-- Binary rain background -->
    <canvas id="binaryCanvas"></canvas>

    <div class="site-content">
      <!-- Navigation -->
      <UHeader :ui="{ root: 'bg-black/80 backdrop-blur-md border-b border-slate-800/60 fixed top-0 left-0 right-0 z-50' }">
        <template #left>
          <a href="/" class="flex items-center gap-2">
            <img src="/images/icon.png" alt="Lucky Developments" class="w-8 h-8 object-contain" />
            <span class="font-mono text-sm font-semibold text-blue-400 tracking-widest uppercase hidden sm:block">Lucky Developments</span>
          </a>
        </template>
        <template #right>
          <nav class="flex items-center gap-1">
            <a href="#about" class="nav-link-custom">About</a>
            <a href="#tools" class="nav-link-custom">Skills</a>
            <a href="#services" class="nav-link-custom">Services</a>
            <a href="#projects" class="nav-link-custom">Projects</a>
            <a href="#contact" class="nav-link-custom">Contact</a>
          </nav>
        </template>
      </UHeader>

      <!-- Hero -->
      <section class="hero-section pt-20">
        <div class="container mx-auto px-4 flex flex-col items-center text-center gap-6">
          <img src="/images/logo.png" alt="Lucky Developments Logo" class="hero-logo" />
          <div>
            <p class="hero-subtitle mb-3">Solo Developer · Australia</p>
            <h1 class="hero-title mb-4">Lucky Developments</h1>
            <p class="hero-desc mx-auto">
              Full-stack developer specialising in Lua/GLua, Discord bots, and web development.
              Building affordable code solutions and connecting the dev community.
            </p>
          </div>
          <div class="flex flex-wrap justify-center gap-3 mt-2">
            <UButton href="#projects" size="lg" color="primary" variant="solid" class="font-mono text-xs tracking-widest uppercase">
              View Projects
            </UButton>
            <UButton href="#contact" size="lg" color="neutral" variant="outline" class="font-mono text-xs tracking-widest uppercase">
              Get In Touch
            </UButton>
          </div>
          <!-- Scroll indicator -->
          <div class="mt-12 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
            <UIcon name="i-heroicons-chevron-double-down" class="w-5 h-5" />
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="section">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="flex flex-col md:flex-row items-center gap-12">
            <div class="flex-shrink-0">
              <div class="relative">
                <img src="/images/avatar.png" alt="Lucky" class="w-44 h-44 rounded-2xl object-cover border-2 border-blue-500/30 shadow-2xl" />
                <div class="absolute -bottom-3 -right-3 bg-blue-600 rounded-lg px-3 py-1.5">
                  <span class="font-mono text-xs font-bold text-white">AUS 🇦🇺</span>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <p class="section-label">// about.me</p>
              <h2 class="section-title mb-3">Who Am I</h2>
              <div class="section-divider"></div>
              <p class="text-slate-400 leading-relaxed text-lg">
                Hi, I'm <span class="text-blue-400 font-semibold">Lucky</span>, a 23-year-old developer from Australia.
                Welcome to my solo development site, where I showcase my work in various coding languages, including
                Lua/GLua, HTML, CSS, PHP, Python, and JavaScript.
              </p>
              <p class="text-slate-400 leading-relaxed mt-4">
                This platform serves as both a portfolio of my projects and a community space for IT professionals and enthusiasts.
                My goal is to help others strengthen their development skills, connect with like-minded individuals who share a passion
                for coding, and provide affordable code solutions for your projects and needs.
              </p>
              <div class="flex flex-wrap gap-2 mt-6">
                <UBadge color="primary" variant="subtle" class="font-mono text-xs">Lua / GLua</UBadge>
                <UBadge color="primary" variant="subtle" class="font-mono text-xs">JavaScript</UBadge>
                <UBadge color="primary" variant="subtle" class="font-mono text-xs">TypeScript</UBadge>
                <UBadge color="primary" variant="subtle" class="font-mono text-xs">PHP</UBadge>
                <UBadge color="primary" variant="subtle" class="font-mono text-xs">Python</UBadge>
                <UBadge color="primary" variant="subtle" class="font-mono text-xs">C# / C++</UBadge>
                <UBadge color="primary" variant="subtle" class="font-mono text-xs">MySQL</UBadge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Section -->
      <section id="tools" class="section bg-section-alt">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-10">
            <p class="section-label">// stack.config</p>
            <h2 class="section-title">Languages, Tools & Technologies</h2>
            <div class="section-divider mx-auto"></div>
            <p class="text-slate-400 mb-6">Languages, frameworks, and tools I use across web, scripting, and game development.</p>
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=MrLuckyGamer&theme=dark&layout=compact&langs_count=10&title_color=ffffff&bg_color=00000000&hide_border=true"
              alt="Most Used Languages"
              class="stats-img mx-auto"
            />
          </div>

          <!-- Languages -->
          <h3 class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4 mt-8">Languages</h3>
          <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
            <div v-for="lang in languages" :key="lang.name" class="tech-item">
              <img :src="lang.icon" :alt="lang.name" />
              <span>{{ lang.name }}</span>
            </div>
          </div>

          <!-- Frameworks -->
          <h3 class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4 mt-10">Frameworks & Libraries</h3>
          <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
            <div v-for="fw in frameworks" :key="fw.name" class="tech-item">
              <img :src="fw.icon" :alt="fw.name" />
              <span>{{ fw.name }}</span>
            </div>
          </div>

          <!-- Tools -->
          <h3 class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4 mt-10">Tools & Technologies</h3>
          <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
            <div v-for="tool in tools" :key="tool.name" class="tech-item">
              <img :src="tool.icon" :alt="tool.name" />
              <span>{{ tool.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="section">
        <div class="container mx-auto px-4 max-w-5xl">
          <div class="text-center mb-10">
            <p class="section-label">// services.list</p>
            <h2 class="section-title">What I Do</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div v-for="service in services" :key="service.title" class="service-card">
              <div class="service-icon">{{ service.icon }}</div>
              <h3 class="font-display font-semibold text-slate-100 text-base mb-2">{{ service.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="section bg-section-alt">
        <div class="container mx-auto px-4 max-w-6xl">
          <div class="text-center mb-10">
            <p class="section-label">// projects.showcase</p>
            <h2 class="section-title">My Projects</h2>
            <div class="section-divider mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              v-for="project in projects"
              :key="project.name"
              :href="project.href"
              target="_blank"
              class="project-card block"
            >
              <img :src="project.img" :alt="project.name" />
              <div class="project-overlay">
                <div class="project-category">{{ project.category }}</div>
                <div class="project-name">{{ project.name }}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="section">
        <div class="container mx-auto px-4 max-w-2xl">
          <div class="text-center mb-10">
            <p class="section-label">// contact.init()</p>
            <h2 class="section-title">Get In Contact</h2>
            <div class="section-divider mx-auto"></div>
            <p class="text-slate-400">Fill out the form below to get in touch with me.</p>
          </div>

          <div class="contact-card">
            <form @submit.prevent="submitContact">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <UFormField label="Your Name">
                  <UInput v-model="form.name" placeholder="John Doe" required size="lg" class="w-full" />
                </UFormField>
                <UFormField label="Your Email">
                  <UInput v-model="form.email" type="email" placeholder="john@example.com" required size="lg" class="w-full" />
                </UFormField>
              </div>
              <UFormField label="Your Message" class="mb-5">
                <UTextarea v-model="form.message" placeholder="Tell me about your project..." rows="5" required size="lg" class="w-full" />
              </UFormField>
              <UButton type="submit" size="lg" color="primary" block class="font-mono text-xs tracking-widest uppercase">
                Send Message
              </UButton>
            </form>

            <UAlert
              v-if="submitted"
              color="success"
              variant="subtle"
              icon="i-heroicons-check-circle"
              title="Message sent!"
              description="Your email window has opened — please send your message from there."
              class="mt-5"
            />
          </div>

          <div class="text-center mt-8">
            <p class="text-slate-400 mb-4">
              You can also reach me on Discord: <span class="discord-tag">luckyyyyyyyy</span>
            </p>
            <div class="flex justify-center gap-3">
              <UButton
                href="https://github.com/MrLuckyGamer"
                target="_blank"
                color="neutral"
                variant="outline"
                size="lg"
                icon="i-simple-icons-github"
                class="font-mono text-xs tracking-wider uppercase"
              >
                GitHub
              </UButton>
              <UButton
                href="https://steamcommunity.com/id/luckywolfire/"
                target="_blank"
                color="neutral"
                variant="outline"
                size="lg"
                icon="i-simple-icons-steam"
                class="font-mono text-xs tracking-wider uppercase"
              >
                Steam
              </UButton>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="site-footer">
        <div class="container mx-auto px-4">
          <p>© 2026 Lucky Developments. All rights reserved.</p>
          <p class="mt-1">For all questions and inquiries, please visit the contact section above.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

function submitContact() {
  const { name, email, message } = form.value
  const subject = encodeURIComponent(`New message from ${name}`)
  const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
  window.location.href = `mailto:contactluckydevelopment@gmail.com?subject=${subject}&body=${body}`
  setTimeout(() => { submitted.value = true }, 800)
  form.value = { name: '', email: '', message: '' }
}

const languages = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
  { name: 'Lua/GLua', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'SQLite', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg' },
]

const frameworks = [
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Nuxt.js (NuxtUI)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxt/nuxt-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Discord.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
]

const tools = [
  { name: 'HeidiSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/32/HeidiSQL_logo_image.png' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
  { name: 'Source Engine', icon: 'https://developer.valvesoftware.com/w/images/thumb/1/10/Icon-Source.png/128px-Icon-Source.png' },
  { name: 'Game Server Admin', icon: 'https://cdn-icons-png.flaticon.com/512/2004/2004925.png' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Blender', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
  { name: 'Substance Painter', icon: 'https://helpx.adobe.com/content/dam/substance-3d/general-knowledge/ecosystem/substance-3d-icons-svg/Adobe_Substance_3D_Painter_icon.svg' },
  { name: 'Hammer', icon: 'https://developer.valvesoftware.com/w/images/thumb/4/4f/Icon-Hammer_4.x.png/64px-Icon-Hammer_4.x.png' },
]

const services = [
  { icon: '🌐', title: 'Website Development', desc: '9 years of experience in full-stack web development.' },
  { icon: '🎮', title: 'Lua/GLua Development', desc: '7 years coding Lua and GLua for Garry\'s Mod and FiveM.' },
  { icon: '🤖', title: 'Discord Bots', desc: 'Custom Discord bots built with a range of languages and frameworks.' },
  { icon: '🗺️', title: 'Source Mapping', desc: 'Garry\'s Mod and Source Engine mapping with Hammer.' },
]

const projects = [
  { name: 'PropHunt: Enhanced Website', category: 'HTML · PHP · CSS · JavaScript', href: 'https://prophuntenhanced.xyz/', img: '/images/pheweb.jpg' },
  { name: 'PropHunt: Enhanced Gamemode', category: "Garry's Mod · LUA/GLUA", href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1758906555', img: '/images/ph.jpg' },
  { name: 'RanchRP Forums Modifications', category: 'MyBB · HTML · PHP · CSS', href: 'https://web.archive.org/web/20201001121119/https://www.ranchrp.net/', img: '/images/ranch.jpg' },
  { name: 'MINT Auto Styling Website', category: 'HTML · PHP · CSS', href: 'https://mint-as.com.au/', img: '/images/mint.jpg' },
  { name: 'rp_anaxes_gg', category: 'Hammer · Source Map', href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3222030009', img: '/images/anaxes.jpg' },
  { name: 'rp_titan_rishi_alin_gg', category: 'Hammer · Source Map', href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3037513684', img: '/images/alin.jpg' },
  { name: 'Inasha Discord Bot', category: 'Node.js · Discord.js', href: 'https://inasha.luckydev.xyz', img: '/images/inasha.png' },
  { name: 'Star Wars Inquisitorius', category: 'HTML · CSS · JavaScript', href: 'https://inq.luckydev.xyz', img: '/images/inq_emblem.png' },
  { name: 'QR Code Generator', category: 'HTML · CSS · JavaScript', href: 'https://qrgen.luckydev.xyz', img: '/images/qrcode.png' },
  { name: 'Sovereign Roleplay', category: 'HTML · CSS', href: 'https://svn.gg', img: '/images/svn.jpg' },
  { name: 'Lucky Developments Old Site', category: 'HTML · CSS · PHP · JavaScript', href: 'https://old.luckydev.xyz', img: '/images/luckydevold.jpg' },
]

// Binary rain
onMounted(() => {
  const canvas = document.getElementById('binaryCanvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')!
  const binary = '01'
  const fontSize = 18
  const frameInterval = 55
  let lastTime = 0
  let drops: number[] = []

  function init() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const cols = Math.floor(canvas.width / fontSize)
    drops = Array.from({ length: cols }, () => Math.random() * canvas.height / fontSize)
  }

  function draw(timestamp: number) {
    if (timestamp - lastTime < frameInterval) {
      requestAnimationFrame(draw)
      return
    }
    lastTime = timestamp
    ctx.fillStyle = 'rgba(10, 10, 15, 0.06)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = `${fontSize}px JetBrains Mono, monospace`
    for (let i = 0; i < drops.length; i++) {
      ctx.fillStyle = Math.random() > 0.92 ? '#ffffff' : '#1d4ed8'
      ctx.fillText(binary[Math.floor(Math.random() * binary.length)], i * fontSize, drops[i] * fontSize)
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
      drops[i]++
    }
    requestAnimationFrame(draw)
  }

  window.addEventListener('resize', init)
  init()
  requestAnimationFrame(draw)
})
</script>