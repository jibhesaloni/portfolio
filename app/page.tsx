"use client";

import { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from "next/link";
import { 
  Mail, Phone, MapPin, ExternalLink, Award, BookOpen, Users, Search,
  Building2, GraduationCap, FileText, Copyright, Shield, Trophy, BarChart3, 
  Globe, Linkedin, User, Star, Download, Eye, Briefcase, Target
} from 'lucide-react';
import { link } from 'node:fs';

const portfolioData = {
  personal: {
    name: "Dr. Anup Ingle",
    title: "Assistant Professor",
    tagline: "Department of electronics and telecommunication engineering",
     avatar: "/profile.png",
    about: "Dedicated academician and network security specialist with extensive experience in teaching, network configuration, and cybersecurity. Skilled in intrusion detection, IoT applications, and programming with a strong passion for shaping future engineers.",
  specialties: [
    "Computer Networks and Security",
    "C/C++ and Python Programming",
    "Telecommunication Systems",
    "Network Traffic Analysis"
  ],
    contact: {
      email: "anup.ingale@viit.ac.in",
      phone: "9325383604",
      address: "Vishwakarma Institute of Information Technology, Pune, India",
      linkedin: "https://www.linkedin.com/in/anup-ingle-bb56a1148/",
      googleScholar: "https://scholar.google.com/citations?user=ABC123",
      scopus: "https://scopus.com/authid/detail.uri?authorId=123456",
      webOfScience: "https://webofscience.com/wos/author/record/123456"
    }
  },
  stats: {
    publications: 26,
    citations: 2456,
    projects: 15,
    awards: 12
  },
  positions: {
    current: [
      {
        title: "Assistant Professor",
        institution: "Vishwakarma institute of information technology",
        duration: "2025 - Present",
        description: "Teaching graduate courses"
      },
      {
        title: "Associate Professor",
        institution: "Vishwakarma institute of information technology",
        duration: "2018 - Present",
        description: "Teaching graduate courses"
      }
    ],
    past: [
      
      
    ]
  },
  education: [
    {
      degree: "PhD in Electronics and Communication Engineering",
      institution: "Sri satya sai university of technology and medical science, sehore",
      year: "2021",
      gpa: "00/00"
    },
    {
      degree: "M.E. in E&TC (Microwave Engineering)",
      institution: "Pune Institute of Computer Technolgy",
      year: "2012",
      gpa: "0/0"
    },
    {
      degree: "BE, Electrical and electroncs engineering",
      institution: "Dr. babasaheb Ambedkar Marathwada University, Aurangabad",
      year: "2001",
      gpa: "Distinction"
    },
    {
      degree: "Diploma in Industrial Electonics",
      institution: "Bajaj Chandrapur Polytechnic Chandrapur",
      year: "1998",
      gpa: "First class"
    }
  ],
  publications: [
    {
      title: "Intrusion Detection for ICMP-Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      journal: "International Journal of Research in Computer Science and Information Technology (IJRCSIT)",
      year: "2013",
      citations: 156,
      impact: "High Impact",
      link:" "
    },
    {
      title: "Intrusion Detection for TCP-SYNC Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      journal: "International Journal of Advanced Research in Computer Science(IJARCS)",
      year: "2013",
      citations: 89,
      impact: "Best Paper Award",
      link: ""
    },
    {
      title: "Update on Next Generation Network Attacks A Review Paper on Network Attacks Classified into Mobile & Computer Based",
      authors: "Ansari Mohsin Jaweed Ahmed, Shaikh Mohd Rehan, Anup Ingle, Sanket Lokhande, Rohan Saswadkar",
      journal: "International Journal of Electrical, Electronics and Computer Systems (IJEECS)",
      year: "2015",
      citations: 234,
      impact: "Most Cited",
      link: "https://example.com/publication1"
    },
    {
      title: "Statistical Approaches For Network Anomaly Detection For UDP Spoofing",
      authors: "Anup Ingle, Aditya Wagh, Rajneesh Sharma, Akshay Shikre",
      journal: "International Journal of Advanced Computational Engineering and Networking",
      year: "2016",
      citations: 89,
      link: ""
    },

    {
      title: "DDoS Attack Detection Algorithms Based on Pattern Classification and Machine Learning",
      authors: "Anup Ingle",
      journal: "Journal of University of Shanghai for Science and Technology",
      year: "2021",
      citations: 89,
      link: ""
    },
    {
      title: "A review on Ad-Hoc Network In Pervasive Environment",
      authors: "Pravin G Gawande, Rajendra S Talware, Shailesh V Kulkarni, Anup W Ingle, Milind S Patil, Gajanan H Chavhan",
      journal: "Journal of Eur. Chem. Bull. 2023",
      year: "2023",
      citations: 89,
      link: ""
    },
    {
      title: "Intelligent Conversational Agents Based Custom Question Answering System",
      authors: "Nitin Sakhare, Jyoti Bangare, Dr. Deepika Ajalkar, Dr. Gajanan Walunjkar, Dr. Madhuri Borawake, Dr. Anup Ingle",
      journal:  "International Journal of Intelligent Systems and Applications in Engineering, IJISAE,2023",
      year: "2023",
      citations: 89,
      link: "https://ijisae.org/index.php/IJISAE/article/view/2860"
    },
    {
      title: "Artificial intelligence-based classification performance evaluation in monophonic and polyphonic indian classical instruments recognition with hybrid domain features amalgamation",
      authors: "Chitre, Abhijit V., Wanjale, Kirti, Deshmukh, Aradhanaa, Kosbatwar, Shyamsunder P., Ingle, Anup & Hundekari, Sheela",
     journal: " Journal of Information and Optimization Sciences",
      year: "2023",
      citations: 89,
      link: "https://www.tarupublications.com/doi/10.47974/JIOS-1345"
    },
    {
      title: "Investigating environmental sustainability applications using advanced monitoring systems.",
      authors: "Sreenivasulu, K., Yadav, S., Pushpalatha, G., Sethumadhavan, R., Ingle, A., & Vijaya, R.",
      journal: "The Scientific Temper",
      year: "2023",
      citations: 89,
      link: "https://scientifictemper.com/index.php/tst/article/view/939"
    },
    {
      title: "Researching brain-computer interfaces for enhancing communication and control in neurological disorders.",
      authors: "Rathore, N., Acharjee2, P. B., Thivyabrabha, K., P, U., Ingle, A., & Davinder kumar. ",
      journal: "The Scientific Temper",
      year: "2023",
      citations: 89,
      link: "https://scientifictemper.com/index.php/tst/article/view/871"
    },
    {
      title: "Smart Traffic: Integrating Machine Learning, and YOLO for Adaptive Traffic Management System. ",
      authors: "Nitin Sakhare, Mrunal Hedau, Gokul B., Omkar Malpure, Malpure,Trupti Shah, Shah, Anup Ingle",
      journal: "International Journal of Intelligent Systems and Applications in Engineering, 12(12s), 347–355.",
      year: "2024",
      citations: 89,
      link: "https://ijisae.org/index.php/IJISAE/article/view/4520"
    },
    {
      title: "Intrusion Detection for ICMP-Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      conference: "2nd National Conference on Computer Communication and Information Technology-2013(NC3IT-2013) ",
      year: "2013",
      citations: 89,
      impact: "Best Paper Award",
      link: ""
    }


  ],
  awards: [
    {
      title: "Outstanding Research Award",
      organization: "IEEE Computer Society",
      year: "2023",
      description: "For significant contributions to machine learning research"
    },
    {
      title: "Best Paper Award",
      organization: "ICML 2022",
      year: "2022",
      description: "Novel approach to federated learning"
    },
    {
      title: "Early Career Researcher Award",
      organization: "National Science Foundation",
      year: "2021",
      description: "Recognition for outstanding early career achievements"
    }
  ],
  books: [
    {
      title: "Internet of Things",
      publisher: "Nirali Publication",
      year: "2023",
      coAuthors: [ "Dr. Anup W. Ingle", "Dr. Amol V. Dhumane"," Dr. Archana Kollu", "Nitin N. Sakhare"],
      link: "https://www.flipkart.com/internet-things-second-year-sy-degree-artifical-intelligence-data-science-semester-4/p/itmacd4162afea0c",
    },
    {
      title: "FUNDAMENTALS OF ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
      publisher: "Nirali Publication",
      year: "2022",
      coAuthors: ["Dr. Mrunal K. Pathak", "Dr. Anup W. Ingle", "Jyoti S. Chinchole"," Nitin N. Sakhare"],
      link:"https://www.flipkart.com/fundamentals-artificial-intelligence-machine-learning-second-year-sy-degree-ai-ml-semester-4/p/itma80b1223298ac"
    },
    {
      title: "MODERNIZED IoT ",
      publisher: "Nirali Publication",
      year: "2022",
      coAuthors: [ "Nitin N. Sakhare", "Dr. Amol V. Dhumane", "Dr. Anup W. Ingle", "Rushikesh S. Tanksale"],
      link:"https://www.flipkart.com/modernized-iot-final-year-degree-course-electronics-telecommunication-engineering-semester-7-sppu/p/itmad50a3e06e835"
    },
    {
      title: "MOBILE COMPUTING",
      publisher: "Nirali Publication",
      year: "2023",
      coAuthors: [ "Dr. Archana K. Ratnaparkhi"," Dr. Anup W. Ingle"," Nitin N. Sakhare", "Rushikesh S. Tanksale"],
      link:"https://www.flipkart.com/mobile-computing-final-year-degree-course-electronics-telecommunication-engineering-semester-8-sppu/p/itma5a016621bb51?pid=9788119115044&lid=LSTBOK97881191150448JUZUP&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "IMAGE PROCESSING",
      publisher: "Nirali Publication",
      year: "2023",
      coAuthors: [  "Dr. Jayashree P. Tamkhade", "Dr. Deepika Ajalkar", "Dr. Anup W. Ingle", "Rushikesh S. Tanksale"],
      link:"https://www.flipkart.com/image-processing-final-year-degree-course-computer-engineering-semester-8-sppu/p/itm0022ef1f48058"
    },
     {
      title: "Video Analytics ",
      publisher: "Nirali praksahan",
      year: "2023",
      coAuthors: [ " Dr. Lalit V. Patil", "Dr. Anup Ingle", "Dr. Sunita S. Dhotre", "Nitin N. Sakhare"],
      link:"https://www.flipkart.com/video-analytics-third-year-ty-b-tech-artificial-intelligence-machine-learning-aiml-semester-6-sppu/p/itm06436aa3af9bc?pid=9788119115938&lid=LSTBOK97881191159380XSIPF&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "Industrial Internet of Things",
      publisher: "Nirali praksahan",
      year: "2023",
      coAuthors: [ "Dr. Gajanan Walunjkar"," Dr. Dipesh Pardeshi", "Dr. Archana Ratnaparkhi", "Dr. Anup Ingle"],
      link:"https://www.flipkart.com/industrial-internet-things-final-year-b-tech-artificial-intelligence-data-science-ai-ds-semester-7-sppu/p/itm957e3a6776d27?pid=9788119117857&lid=LSTBOK9788119117857BXS774&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "Wireless Sensor Networks",
      publisher: "Nirali praksahan",
      year: "2023",
      coAuthors: ["Nitin N. Sakhare", "Dr. Anup W. Ingle"," Dr. Pravin G. Gawande" ],
      link:"https://www.flipkart.com/wireless-sensor-networks-dbatu-final-year-b-tech-course-electronics-telecommunication-engineering-engineering-semester-7/p/itmab4a57f5dad4e?pid=9788119116942&lid=LSTBOK9788119116942TWLSSS&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "BLOCKCHAIN TECHNOLOGY ",
      publisher: "Nirali praksahan",
      year: "2023",
      coAuthors: [ "Nitin N. Sakhare"," Vijay M. Marathe"," Dr. Anup W. Ingle"," Dr. Pravin G. Gawande" ],
      link:"https://www.flipkart.com/blockchain-technology-dbatu-semester-7-final-year-b-tech-course-computer-engineering-science-engineering/p/itm1a6aeb6c2942c?pid=9788119116249&lid=LSTBOK9788119116249Q5RX2A&marketplace=FLIPKART&cmpid=content_book_8965229628_gmc"
    },
    {
      title: "Deep Learning ",
      publisher: "Nirali praksahan",
      year: "2023",
      coAuthors: [ " Dr. Kavita P. Moholkar"," Nitin N. Sakhare", "Dr. Nilesh P. Sable"," Dr. Anup W. Ingle"],
      link:"https://www.flipkart.com/deep-learning-dbatu-semester-7-final-year-b-tech-course-computer-engineering-science-engineering-information-technology/p/itm7753b86928502"
    },
     
  ],
  patents: [
    {
      title: "DESIGN AND DEVELOPMENT OF AN ULTRASONIC VIBRATION-ASSISTED TURNING TOOLONG FIXTURE AND HARD MACHINE,",
      number: "202221004356",
      year: "2022",
      status: "Granted"
    }
  ]
};

const StatCard = ({ icon: Icon, label, value }: any) => (
  <div className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
    <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

interface SearchAndFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  allYears: number[];
  activeTab: string;
  filteredCount: number;
  onClearFilters: () => void;
}

const SearchAndFilter = ({
  searchQuery,
  setSearchQuery,
  selectedYear,
  setSelectedYear,
  allYears,
  activeTab,
  filteredCount,
  onClearFilters
}: SearchAndFilterProps) => (
  <div className="mb-6 space-y-4">
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search by title, author, journal, or publisher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Years</option>
        {allYears.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
    {(searchQuery || selectedYear) && (
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Showing {filteredCount} results</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="h-6 px-2 text-xs"
        >
          Clear filters
        </Button>
      </div>
    )}
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Filter functions for searchable content
  const filteredPublications = useMemo(() => {
    return portfolioData.publications.filter(pub => {
      const matchesSearch = searchQuery === "" || 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pub.journal && pub.journal.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (pub.conference && pub.conference.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesYear = selectedYear === "" || pub.year.toString() === selectedYear;
      
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  const filteredBooks = useMemo(() => {
    return portfolioData.books.filter(book => {
      const matchesSearch = searchQuery === "" || 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.coAuthors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesYear = selectedYear === "" || book.year.toString() === selectedYear;
      
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  const filteredPatents = useMemo(() => {
    return portfolioData.patents.filter(patent => {
      const matchesSearch = searchQuery === "" || 
        patent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patent.number.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesYear = selectedYear === "" || patent.year.toString() === selectedYear;
      
      return matchesSearch && matchesYear;
    });
  }, [searchQuery, selectedYear]);

  // Get unique years for filter dropdown
  const allYears = useMemo(() => {
  const years = new Set<number>([
    ...portfolioData.awards.map(a => Number(a.year)),
    ...portfolioData.patents.map(p => Number(p.year))
  ]);
  return Array.from(years).sort((a, b) => b - a);
}, []);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedYear("");
  };

  const getFilteredCount = () => {
    switch (activeTab) {
      case 'publications':
        return filteredPublications.length;
      case 'books':
        return filteredBooks.length;
      case 'patents':
        return filteredPatents.length;
      default:
        return 0;
    }
  };

  // function setShowContact(arg0: boolean): void {
  //   throw new Error('Function not implemented.');
  // }
  const [showContact, setShowContact] = useState(false);
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-blue-100">
              <AvatarImage src={portfolioData.personal.avatar} alt={portfolioData.personal.name} />
              <AvatarFallback className="text-2xl bg-blue-600 text-white">SC</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {portfolioData.personal.name}
              </h1>
              <p className="text-xl text-blue-600 mb-2">
                {portfolioData.personal.title}
              </p>
              <p className="text-lg text-gray-600 mb-4">
                {portfolioData.personal.tagline}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {portfolioData.personal.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                    {specialty}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/contact">
                <Button variant="outline" >

                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </Button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-sm mb-3 opacity-90">Connect with Me on Social Media</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700" asChild>
                <a href={portfolioData.personal.contact.googleScholar} target="_blank">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Google Scholar
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700" asChild>
                <a href={portfolioData.personal.contact.scopus} target="_blank">
                  <Globe className="h-4 w-4 mr-2" />
                  Scopus
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700" asChild>
                <a href={portfolioData.personal.contact.linkedin} target="_blank">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700" asChild>
                <a href={portfolioData.personal.contact.webOfScience} target="_blank">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Web of Science
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard icon={FileText} label="Publications" value={portfolioData.stats.publications} />
          <StatCard icon={BarChart3} label="Citations" value={portfolioData.stats.citations} />
    
          <StatCard icon={Briefcase} label="Projects" value={portfolioData.stats.projects} />
          <StatCard icon={Award} label="Awards" value={portfolioData.stats.awards} />
          
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="overview" className="text-xs">Overview</TabsTrigger>
            <TabsTrigger value="awards" className="text-xs">Awards</TabsTrigger>
            <TabsTrigger value="publications" className="text-xs">Publications</TabsTrigger>
            <TabsTrigger value="books" className="text-xs">Books</TabsTrigger>
            <TabsTrigger value="patents" className="text-xs">Patents</TabsTrigger>
            <TabsTrigger value="copyrights" className="text-xs">Copyrights</TabsTrigger>
            <TabsTrigger value="research" className="text-xs">Research</TabsTrigger>
            <TabsTrigger value="contact" className="text-xs">Contact</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {portfolioData.personal.about}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Current Positions */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      Current Positions
                    </h4>
                    <div className="space-y-4">
                      {portfolioData.positions.current.map((position, index) => (
                        <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                          <h5 className="font-semibold text-gray-900">{position.title}</h5>
                          <p className="text-blue-600 font-medium">{position.institution}</p>
                          <p className="text-sm text-gray-600 mb-2">{position.duration}</p>
                          <p className="text-sm text-gray-700">{position.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-green-600" />
                      Education
                    </h4>
                    <div className="space-y-4">
                      {portfolioData.education.map((edu, index) => (
                        <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-100">
                          <h5 className="font-semibold text-gray-900">{edu.degree}</h5>
                          <p className="text-green-600 font-medium">{edu.institution}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm text-gray-600">{edu.year}</span>
                            <span className="text-sm text-gray-600">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Career Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...portfolioData.positions.current, ...portfolioData.positions.past].map((position, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900">{position.title}</h5>
                        <p className="text-blue-600">{position.institution}</p>
                        <p className="text-sm text-gray-600">{position.duration}</p>
                        {position.description && (
                          <p className="text-sm text-gray-700 mt-1">{position.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Awards Tab */}
          <TabsContent value="awards">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Awards & Recognition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolioData.awards.map((award, index) => (
                    <div key={index} className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Trophy className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{award.title}</h4>
                          <p className="text-yellow-700 font-medium">{award.organization}</p>
                          <p className="text-sm text-gray-600 mb-2">{award.year}</p>
                          <p className="text-sm text-gray-700">{award.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 ">
                  <FileText className="h-5 w-5" />
                  Research Publications
                </CardTitle>
                <CardDescription>
                  Peer-reviewed articles and conference papers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SearchAndFilter
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                  allYears={allYears}
                  activeTab={activeTab}
                  filteredCount={getFilteredCount()}
                  onClearFilters={handleClearFilters}
                />
                <div className="space-y-6 ">
                  {filteredPublications.length === 0 ? (
                    <div className="text-center py-8 ">
                      <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No publications found matching your search criteria.</p>
                    </div>
                  ) : (
                    filteredPublications.map((pub, index) => (
                      <div key={index} className="p-6 bg-indigo-100 border border-gray-200 rounded-lg hover:shadow-md transition-shadow ">
                        <div className="flex items-start justify-between mb-3 ">
                          <div className="flex gap-2">
                            <Badge variant={pub.journal ? 'default' : 'secondary'}>
                              {pub.journal ? 'Journal' : 'Conference'}
                            </Badge>
                            {pub.impact && (
                              <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                                <Star className="h-3 w-3 mr-1" />
                                {pub.impact}
                              </Badge>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">{pub.citations}</div>
                            <div className="text-xs text-gray-500">citations</div>
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h4>
                        <p className="text-blue-600 mb-1">{pub.authors}</p>
                        <p className="text-gray-600 mb-4">{pub.journal || pub.conference} • {pub.year}</p>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Paper
                            </a>
                          </Button>
                        </div>

                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Published Books
                </CardTitle>
                <CardDescription>
                  Authored and co-authored publications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SearchAndFilter
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                  allYears={allYears}
                  activeTab={activeTab}
                  filteredCount={getFilteredCount()}
                  onClearFilters={handleClearFilters}
                />
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredBooks.length === 0 ? (
                    <div className="col-span-full text-center py-8">
                      <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No books found matching your search criteria.</p>
                    </div>
                  ) : (
                    filteredBooks.map((book, index) => (
                      <div key={index} className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h4>
                        <p className="text-purple-600 font-medium">{book.publisher}</p>
                        <p className="text-gray-600 mb-3">{book.year}</p>
                        {book.coAuthors.length > 0 && (
                          <p className="text-sm text-gray-600 mb-3">
                            Co-authors: {book.coAuthors.join(', ')}
                          </p>
                        )}
                        <Button size="sm" variant="outline" asChild>
                          <a
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Details
                          </a>
                        </Button>

                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patents Tab */}
          <TabsContent value="patents">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Patents & IP
                </CardTitle>
                <CardDescription>
                  Intellectual property and innovations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SearchAndFilter
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                  allYears={allYears}
                  activeTab={activeTab}
                  filteredCount={getFilteredCount()}
                  onClearFilters={handleClearFilters}
                />
                <div className="space-y-4">
                  {filteredPatents.length === 0 ? (
                    <div className="text-center py-8">
                      <Shield className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No patents found matching your search criteria.</p>
                    </div>
                  ) : (
                    filteredPatents.map((patent, index) => (
                      <div key={index} className="p-6 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-start justify-between mb-3">
                          <Badge className="bg-green-600">{patent.status}</Badge>
                          <span className="text-lg font-semibold text-green-600">{patent.year}</span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{patent.title}</h4>
                        <p className="text-green-600 font-mono">{patent.number}</p>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Get in touch for collaboration opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-blue-600">{portfolioData.personal.contact.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-green-600">{portfolioData.personal.contact.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-purple-600">{portfolioData.personal.contact.address}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Profiles</h4>
                    
                    <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                      <a href={portfolioData.personal.contact.linkedin} target="_blank">
                        <Linkedin className="h-5 w-5 mr-3" />
                        LinkedIn Profile
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                      <a href={portfolioData.personal.contact.googleScholar} target="_blank">
                        <BarChart3 className="h-5 w-5 mr-3" />
                        Google Scholar
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                      <a href={portfolioData.personal.contact.scopus} target="_blank">
                        <Globe className="h-5 w-5 mr-3" />
                        Scopus Profile
                      </a>
                    </Button>
                    
                    <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                      <a href={portfolioData.personal.contact.webOfScience} target="_blank">
                        <BarChart3 className="h-5 w-5 mr-3" />
                        Web of Science
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Placeholder tabs */}
          {['copyrights', 'research'].map((tabValue) => (
            <TabsContent key={tabValue} value={tabValue}>
              <Card>
                <CardHeader>
                  <CardTitle className="capitalize">
                    {tabValue === 'research' ? 'Research & Academic Contributions' : tabValue}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Target className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Content for {tabValue === 'research' ? 'Research & Academic Contributions' : tabValue} will be displayed here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}