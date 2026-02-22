import React from 'react';
import { motion } from 'framer-motion';
import profile from './assets/profile.jpeg'
import adm from './assets/adm.png'
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code2,
    Database,
    ShieldCheck,
    ChevronRight,
    Rocket,
    Cpu,
    Globe,
    Layers,
    X
} from 'lucide-react';

// Componente para animações de entrada
const FadeIn = ({ children, delay = 0, x = 0, y = 20 }) => (
    <motion.div
        initial={{ opacity: 0, x, y }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export default function Portfolio() {
    const techStack = ["React", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT"];

    return (
        <div className="bg-[#0b0f1a] min-h-screen text-slate-300 selection:bg-blue-500/30 font-sans scroll-smooth overflow-x-hidden">

            {/* BACKGROUND GLOWS */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />
            </div>

            {/* NAVBAR */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-white/5 bg-[#0b0f1a]/80">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-black text-white tracking-tighter"
                    >
                        ANABELLY<span className="text-blue-500">.</span>PASSOS
                    </motion.span>

                    <div className="flex gap-5 items-center">
                        <a href="#projects" className="hidden md:block text-sm font-bold hover:text-white transition uppercase tracking-widest text-slate-500">Projetos</a>
                        <div className="h-4 w-px bg-white/10 hidden md:block"></div>
                        <a href="https://github.com/anabellypassos" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition transform hover:scale-110"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/anabelly-passos-a4b44623b" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition transform hover:scale-110"><Linkedin size={20} /></a>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative pt-32 lg:pt-48 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LADO ESQUERDO: TEXTO */}
                    <FadeIn x={-50}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-black mb-8 tracking-widest uppercase">
                            <Cpu size={14} /> Engenheira de Software Full Stack
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] mb-10 tracking-tighter">
                            Sistemas <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                                Escaláveis.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-medium">
                            Especialista em arquitetura de software moderna. Transformo requisitos complexos
                            em aplicações Full Stack robustas, seguras e com alta performance.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black transition-all flex items-center gap-2 shadow-2xl shadow-blue-600/20 hover:-translate-y-1">
                                Explorar Projetos <ChevronRight size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/anabelly-passos-a4b44623b" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white rounded-2xl font-black transition-all hover:-translate-y-1">
                                Conectar
                            </a>
                        </div>
                    </FadeIn>

                    {/* LADO DIREITO: SUA FOTO */}
                    <FadeIn x={50} delay={0.2}>
                        <div className="relative group w-full max-w-[450px] mx-auto lg:ml-auto">
                            {/* Brilho atrás da foto */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                            <div className="relative rounded-[3rem] border border-white/10 overflow-hidden bg-[#0b0f1a] shadow-2xl shadow-blue-500/10">
                                <img
                                    src={profile}
                                    alt="Anabelly Passos"
                                    className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition duration-500"></div>
                            </div>

                            {/* Tag Flutuante */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Disponível para Projetos</span>
                                </div>
                            </motion.div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* EXPERTISE SECTION */}
            <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    <FadeIn delay={0.1}>
                        <div className="group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition duration-500"><Layers size={30} /></div>
                            <h3 className="text-white font-black text-2xl mb-4 tracking-tight uppercase">Frontend</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">Interfaces dinâmicas com React.js, focadas em usabilidade e design responsivo com Tailwind CSS.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="group">
                            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition duration-500"><Database size={30} /></div>
                            <h3 className="text-white font-black text-2xl mb-4 tracking-tight uppercase">Backend</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">Sistemas escaláveis com Node.js e Prisma ORM. Especialista em bancos PostgreSQL e Supabase.</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="group">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition duration-500"><ShieldCheck size={30} /></div>
                            <h3 className="text-white font-black text-2xl mb-4 tracking-tight uppercase">Security</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">Protocolos de segurança robustos com JWT e controle de acesso granular (RBAC) em nível de servidor.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* PROJECT SECTION */}
            <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
                <FadeIn>
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">Projetos_</h2>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn x={-30}>
                        <div className="space-y-8">
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded italic">Admin Dashboard Pro</span>
                            </div>

                            <h3 className="text-5xl md:text-6xl font-black text-white leading-none tracking-tighter">GESTÃO <br /> CORPORATIVA</h3>

                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                                Desenvolvi uma infraestrutura Full Stack para controle de estoque e usuários.
                                O projeto foca em segurança, utilizando criptografia e permissões por cargos, além de
                                processamento de imagens no servidor.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {techStack.map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 font-bold uppercase italic">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-8 pt-4">
                                <a href="https://admin-front-end-sigma.vercel.app/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-white font-black text-lg hover:text-blue-400 transition duration-300 uppercase italic underline underline-offset-8 decoration-blue-500">
                                    Live Preview <ExternalLink size={20} />
                                </a>
                                <a href="https://github.com/anabellypassos" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-slate-500 font-black text-lg hover:text-white transition duration-300 uppercase italic">
                                    Github
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn x={30} delay={0.2}>
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-slate-900">
                                <img
                                    src={adm}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition duration-700 hover:scale-105"
                                    alt="Project Preview"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-40 px-6 text-center relative">
                <FadeIn>
                    <div className="relative z-10">
                        <Rocket className="mx-auto mb-8 text-blue-500 animate-bounce" size={56} />
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase italic">
                            Vamos construir <br /> o futuro?
                        </h2>
                        <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed italic">
                            Estou pronta para resolver os desafios técnicos da sua empresa com engenharia de ponta.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/anabelly-passos-a4b44623b"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block px-14 py-6 bg-white text-black rounded-2xl font-black text-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-2xl uppercase tracking-tighter"
                        >
                            Conectar no LinkedIn
                        </a>
                    </div>
                </FadeIn>
            </section>

            {/* FOOTER */}
            <footer className="py-16 px-6 border-t border-white/5 bg-black/20 italic">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                    <div className="flex gap-8">
                        <a href="https://github.com/anabellypassos" target="_blank" rel="noreferrer" className="hover:text-white transition">Github</a>
                        <a href="https://www.linkedin.com/in/anabelly-passos-a4b44623b" target="_blank" rel="noreferrer" className="hover:text-white transition">Linkedin</a>
                    </div>

                    <div className="text-center">
                        © 2024 ANABELLY PASSOS // ENGENHEIRA DE SOFTWARE
                    </div>

                    <div className="flex gap-2 items-center">
                        <Globe size={12} /> BRAZIL
                    </div>
                </div>
            </footer>
        </div>
    );
}