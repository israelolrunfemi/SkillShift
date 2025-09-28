"use client"

import Image from "next/image"

export default function SpeakersSection() {
  const speakersData = {
    speakers: [
      {
      name: "Prof. Folashade Ogunsola",
      title: "Vice Chancellor, University of Lagos",
      image: "/images/folashade.jpg",
      bio: "Renowned academic leader and medical microbiologist serving as the Vice Chancellor of the University of Lagos."
    },
       {
        name: "Samuel Egube",
        title: "Deputy Chief of Staff, Lagos State / Author / Life Coach",
        image: "/images/Samuel Egube.jpeg",
        bio: "Seasoned government administrator, author, and life coach contributing to Lagos State governance and personal development."
      },
            {
        name: "Akinbo Akin-Olugbade",
        title: "CEO & Founder,  Kawaii Technology",
        image: "/images/Akinbo Akin Olugbade.jpg",
        bio: "Innovative CEO and founder of  Kawaii Technology, advancing technological solutions."
      },
      {
        name: "Prof. Sunday Adebisi",
        title: "Chair, Professor of Entrepreneurship Studies & Director ESD, UNILAG",
        image: "/images/Sunday.jpeg",
        bio: "Distinguished professor of entrepreneurship studies and director of the Entrepreneurship and Skills Development Centre at UNILAG."
      },
      {
        name: "Temitope Okunnu",
        title: "Founder and CEO, FABE International Foundation",
        image: "/images/Temitope.jpeg",
        bio: "Dedicated founder and CEO of the FABE International Foundation focused on international development and education."
      },
      {
        name: "Ayo Akindola",
        title: "Co-Founder & CPO, PocketApp (PiggyVest Group)",
        image: "/images/Ayo.jpeg",
        bio: "Ayo Akinola is the Co-Founder and Chief Product Officer of PocketApp (a product by PiggyVest), with deep expertise in product strategy, technology, and fintech innovation."
      },
      {
        name: "Idris Akinlabi",
        title: "Division operations specialist at Chipper Cash",
        image: "/images/Akinlabi 2.jpg",
        bio: "Operations specialist at Chipper Cash, experienced in financial technology and division management."
      },
      {
        name: "Jimoh Okoh",
        title: "Chief Solutions Architect Huawei cloud Nigeria | Presales Engineer | Team Lead",
        image: "/images/Jimoh.jpg",
        bio: "Results-driven Senior Solutions Architect with extensive experience in cloud computing, software development, and enterprise solutions. Proven ability to design and implement innovative cloud solutions, drive technical presales, and lead successful project deliveries."
      },
      {
        name: "Oluftunto Okuboyejo",
        title: "Head, Digital Marketing / IT - First Ally Capital",
        image: "/images/Oluftunto Okuboyejo.jpeg",
        bio: "Head of digital marketing and IT at First Ally Capital, driving digital strategies and technology initiatives."
      },
      {
        name: "Olawale Samuel",
        title: "CEO and co founder of Axia Africa",
        image: "/images/Olawale Samuel.jpeg",
        bio: "CEO and co-founder of Axia Africa, leading business innovation and growth across the continent."
      },
      {
        name: "Ada Nduka Oyom",
        title: "Founder, She Code Africa / Developer Relations Lead, Google",
        image: "/images/Ada.jpeg",
        bio: "Founder of She Code Africa and developer relations lead at Google, advocating for women in technology and developer communities."
      },
      {
        name: "Akinlami Praise",
        title: "Founder, Profitly Consulting / Leading CRM Marketing Expert",
        image: "/images/Praise.jpg",
        bio: "Founder of Profitly Consulting and leading expert in CPA marketing strategies."
      },
      {
        name: "Gerald Umeh",
        title: "Digital Entrepreneur and Content creator",
        image: "/images/Gerald Umeh.jpeg",
        bio: "Digital entrepreneur and content creator specializing in online business and media production."
      },

      {
        name: "Damilare Haroun",
        title: "Best Graduating Student, University of Lagos",
        image: "/images/Damilare.jpg",
        bio: "Perfect 5.0 GPA, Outstanding scholar and best graduating student from the University of Lagos."
      },
      {
        name: "David Mark",
        title: "Back-end & Data Engineer, Terrace, USA.",
        image: "/images/Davidmark.jpg",
        bio: "Skilled back-end and data engineer at Terrace, with expertise in software and data systems."
      },
      {
        name: "Shokunbi Pelumi",
        title: "Amazon Kdp expert",
        image: "/images/Pelumi.jpg",
        bio: "Expert  on Amazon KDP, known for impactful self-published works."
      },
      {
        name: "Fawwaz Yahaya",
        title: "Graphic Designer & Content Creator",
        image: "/images/Fawwaz.jpg",
        bio: "Creative graphic designer and content creator specializing in visual media and design."
      }
    ]
  }

  return (
    <section id="speakers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <h2 className="text-5xl font-bold mb-12">
          Meet Our <span className="text-primary">Speakers</span>
        </h2>
        
        {/* Confirmed and Proposed Speakers */}
        <h3 className="text-3xl font-bold mb-10">Confirmed and Proposed Speakers</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakersData.speakers.map((spk, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <Image
                src={spk.image}
                alt={spk.name}
                width={200}
                height={200}
                className="rounded-2xl mx-auto mb-6 object-cover"
              />
              <h4 className="text-xl font-bold">{spk.name}</h4>
              <p className="text-primary font-medium">{spk.title}</p>
              <p className="text-gray-600 text-sm mt-4">{spk.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
