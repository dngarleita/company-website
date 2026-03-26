import { motion } from 'framer-motion'

const cdnBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const technologies = [
  { name: 'TypeScript', src: `${cdnBase}/typescript/typescript-original.svg` },
  { name: 'React', src: `${cdnBase}/react/react-original.svg` },
  { name: 'Node.js', src: `${cdnBase}/nodejs/nodejs-original.svg` },
  { name: 'Express', src: `${cdnBase}/express/express-original.svg`, invert: true },
  { name: 'NestJS', src: `${cdnBase}/nestjs/nestjs-original.svg` },
  { name: 'PHP', src: `${cdnBase}/php/php-original.svg` },
  { name: 'Symfony', src: `${cdnBase}/symfony/symfony-original.svg`, invert: true },
  { name: 'Docker', src: `${cdnBase}/docker/docker-original.svg` },
  { name: 'Kubernetes', src: `${cdnBase}/kubernetes/kubernetes-original.svg` },
  { name: 'Terraform', src: `${cdnBase}/terraform/terraform-original.svg` },
  { name: 'AWS', src: `${cdnBase}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
  { name: 'Azure', src: `${cdnBase}/azure/azure-original.svg` },
  { name: 'Google Cloud', src: `${cdnBase}/googlecloud/googlecloud-original.svg` },
  { name: 'GitHub Actions', src: `${cdnBase}/githubactions/githubactions-original.svg` },
  { name: 'GitLab', src: `${cdnBase}/gitlab/gitlab-original.svg` },
]

function LogoItem({ tech }: { tech: (typeof technologies)[number] }) {
  return (
    <div className="flex items-center gap-2.5 opacity-40 hover:opacity-80 transition-opacity duration-300 shrink-0">
      <img
        src={tech.src}
        alt={tech.name}
        className={`w-8 h-8 object-contain${'invert' in tech && tech.invert ? ' invert brightness-200' : ''}`}
        loading="lazy"
      />
      <span className="text-sm text-neutral-400 font-medium whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="py-16 bg-neutral-900/30 border-y border-neutral-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.p
          className="text-center text-sm text-neutral-500 uppercase tracking-wider font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technologies we work with
        </motion.p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

        {/* Two identical strips side by side, each animating via CSS for a seamless loop */}
        <div className="flex w-max animate-[scroll_35s_linear_infinite]">
          <div className="flex gap-12 items-center shrink-0 pr-12">
            {technologies.map((tech) => (
              <LogoItem key={tech.name} tech={tech} />
            ))}
          </div>
          <div className="flex gap-12 items-center shrink-0 pr-12" aria-hidden>
            {technologies.map((tech) => (
              <LogoItem key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
