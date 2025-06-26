// // components/leetcode-stats.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FiTrendingUp, FiCheckCircle, FiAward, FiGitMerge, FiCalendar } from "react-icons/fi";

// // --- Types and Interfaces ---
// type StatsResponse = {
//     status: string;
//     message: string;
//     totalSolved: number;
//     totalQuestions: number;
//     easySolved: number;
//     totalEasy: number;
//     mediumSolved: number;
//     totalMedium: number;
//     hardSolved: number;
//     totalHard: number;
//     acceptanceRate: number;
//     ranking: number;
//     contributionPoints: number;
//     reputation: number;
//     submissionCalendar: Record<string, number>;
// };

// // --- Framer Motion Variants ---
// const containerVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };


// // --- Reusable Sub-Components ---

// const StatCard = ({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string | number; color: string }) => (
//     <motion.div
//         variants={itemVariants}
//         whileHover={{ y: -5, transition: { duration: 0.2 } }}
//         className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg flex items-center space-x-3"
//     >
//         <div className={`p-3 rounded-full ${color}`}>
//             {icon}
//         </div>
//         <div>
//             <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
//             <p className="text-lg font-bold text-gray-800 dark:text-white">{value}</p>
//         </div>
//     </motion.div>
// );

// const CircularProgress = ({ percentage, children }: { percentage: number; children: React.ReactNode }) => {
//     const CIRCLE_LENGTH = 2 * Math.PI * 48;
//     return (
//         <div className="relative w-36 h-36">
//             <svg className="w-full h-full" viewBox="0 0 100 100">
//                 <circle cx="50" cy="50" r="48" strokeWidth="4" className="stroke-gray-200 dark:stroke-gray-700" fill="none" />
//                 <motion.circle
//                     cx="50" cy="50" r="48" strokeWidth="4" fill="none" strokeLinecap="round" transform="rotate(-90 50 50)"
//                     className="stroke-blue-500"
//                     strokeDasharray={CIRCLE_LENGTH}
//                     initial={{ strokeDashoffset: CIRCLE_LENGTH }}
//                     animate={{ strokeDashoffset: CIRCLE_LENGTH * (1 - percentage / 100) }}
//                     transition={{ duration: 1.5, ease: "circOut" }}
//                 />
//             </svg>
//             <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
//         </div>
//     );
// };

// const DifficultyBar = ({ label, solved, total, colorClass }: { label: string; solved: number; total: number; colorClass: string }) => {
//     const percentage = total > 0 ? (solved / total) * 100 : 0;
//     return (
//         <div className="w-full">
//             <div className="flex justify-between items-center mb-1">
//                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
//                 <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{solved} / {total}</span>
//             </div>
//             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
//                 <motion.div
//                     className={`h-2.5 rounded-full ${colorClass}`}
//                     initial={{ width: 0 }}
//                     animate={{ width: `${percentage}%` }}
//                     transition={{ duration: 1.2, ease: "easeOut" }}
//                 />
//             </div>
//         </div>
//     );
// };

// // --- FINAL ACTIVITY HEATMAP with Monthly Gaps ---
// const ActivityHeatmap = ({ data }: { data: Record<string, number> }) => {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const startDate = new Date(currentYear, 0, 1);
//     const endDate = new Date(currentYear, 11, 31);

//     const submissionMap = Object.entries(data).reduce((acc, [timestamp, count]) => {
//         const date = new Date(parseInt(timestamp) * 1000);
//         acc[date.toISOString().split('T')[0]] = count;
//         return acc;
//     }, {} as Record<string, number>);

//     const daysInYear = [];
//     for (let day = new Date(startDate); day <= endDate; day.setDate(day.getDate() + 1)) {
//         daysInYear.push(new Date(day));
//     }

//     const placeholders = Array.from({ length: startDate.getDay() }, () => null);
//     const allCells = [...placeholders, ...daysInYear];

//     const weeks = [];
//     for (let i = 0; i < allCells.length; i += 7) {
//         weeks.push(allCells.slice(i, i + 7));
//     }

//     // A Set for quick lookups to see if a week is the start of a month
//     const monthStartWeeks = new Set(
//         weeks.reduce((acc, week, i) => {
//             const firstDayOfMonth = week.find(day => day?.getDate() === 1);
//             if (firstDayOfMonth) {
//                 acc.push(i);
//             }
//             return acc;
//         }, [] as number[])
//     );
    
//     const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//     const getDayColorClass = (count: number): string => {
//         if (count > 8) return 'bg-green-600';
//         if (count > 5) return 'bg-green-500';
//         if (count > 2) return 'bg-green-400';
//         if (count > 0) return 'bg-green-300';
//         return 'bg-gray-200 dark:bg-gray-800';
//     };

//     return (
//         <motion.div variants={itemVariants} className="w-full">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
//                 <FiCalendar className="mr-2 text-gray-500" />
//                 Contribution Activity
//             </h3>
//             <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
//                 <div className="flex flex-col">
//                     {/* Month Labels */}
//                     <div className="flex justify-around text-xs text-gray-400 mb-2">
//                         {monthLabels.map(name => <div key={name} className="flex-1 text-center">{name}</div>)}
//                     </div>
//                     {/* Heatmap Grid */}
//                     <div className="flex gap-[3px]">
//                         {weeks.map((week, weekIndex) => (
//                             <React.Fragment key={weekIndex}>
//                                 {/* KEY FIX: Add a spacer div if the week is a month start */}
//                                 {monthStartWeeks.has(weekIndex) && weekIndex > 0 && <div className="w-[12px]" />}
//                                 <div className="flex flex-col gap-[3px]">
//                                     {week.map((day, dayIndex) => {
//                                         if (!day) {
//                                             return <div key={`ph-${weekIndex}-${dayIndex}`} className="w-[12px] h-[12px] bg-transparent rounded-sm" />;
//                                         }
//                                         const dateString = day.toISOString().split('T')[0];
//                                         const count = submissionMap[dateString] || 0;
//                                         const colorClass = day > today ? 'bg-gray-200 dark:bg-gray-800 opacity-50' : getDayColorClass(count);

//                                         return (
//                                             <div
//                                                 key={day.toISOString()}
//                                                 className={`w-[12px] h-[12px] rounded-sm ${colorClass}`}
//                                                 title={day > today ? 'Future Date' : `${dateString}: ${count} submissions`}
//                                             />
//                                         );
//                                     })}
//                                 </div>
//                             </React.Fragment>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };


// // --- Main Component ---
// export default function LeetcodeStats() {
//     const [stats, setStats] = useState<StatsResponse | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const username = process.env.NEXT_PUBLIC_LEETCODE_USERNAME;

//     useEffect(() => {
//         if (!username) {
//             setError("LeetCode username is not set.");
//             return;
//         }
//         fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
//             .then(res => res.ok ? res.json() : Promise.reject(res))
//             .then(data => data.status === "success" ? setStats(data) : setError(data.message))
//             .catch(async err => {
//                 const body = await err.json().catch(() => ({ message: "An unknown error occurred." }));
//                 setError(body.message || "Failed to fetch stats.");
//             });
//     }, [username]);

//     if (error) {
//         return <div className="w-full max-w-5xl bg-red-100 text-red-700 p-6 rounded-2xl shadow-lg text-center">Error: {error}</div>;
//     }

//     if (!stats) {
//         return <div className="w-full max-w-5xl min-h-[400px] bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg flex items-center justify-center"><p>Loading LeetCode Dashboard...</p></div>;
//     }

//     return (
//         <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             // KEY FIX: Widened the component to fit the full year heatmap
//             className="w-full max-w-5xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 space-y-8"
//         >
//             {/* Block 1: Overview */}
//             <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
//                 <div className="flex-shrink-0">
//                     <CircularProgress percentage={(stats.totalSolved / stats.totalQuestions) * 100}>
//                         <span className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">{stats.totalSolved}</span>
//                         <span className="text-sm text-gray-500 dark:text-gray-400">Solved</span>
//                     </CircularProgress>
//                 </div>
//                 <div className="w-full flex flex-col space-y-4">
//                     <DifficultyBar label="Easy" solved={stats.easySolved} total={stats.totalEasy} colorClass="bg-green-500" />
//                     <DifficultyBar label="Medium" solved={stats.mediumSolved} total={stats.totalMedium} colorClass="bg-yellow-500" />
//                     <DifficultyBar label="Hard" solved={stats.hardSolved} total={stats.totalHard} colorClass="bg-red-500" />
//                 </div>
//             </motion.div>

//             {/* Block 2: Key Metrics */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <StatCard icon={<FiTrendingUp size={20} className="text-purple-800"/>} label="Ranking" value={stats.ranking.toLocaleString()} color="bg-purple-200 dark:bg-purple-900/50"/>
//                 <StatCard icon={<FiCheckCircle size={20} className="text-teal-800"/>} label="Acceptance" value={`${stats.acceptanceRate.toFixed(1)}%`} color="bg-teal-200 dark:bg-teal-900/50"/>
//                 <StatCard icon={<FiAward size={20} className="text-red-800"/>} label="Reputation" value={stats.reputation} color="bg-red-200 dark:bg-red-900/50"/>
//                 <StatCard icon={<FiGitMerge size={20} className="text-orange-800"/>} label="Contributions" value={stats.contributionPoints} color="bg-orange-200 dark:bg-orange-900/50"/>
//             </div>

//             {/* Block 3: Activity Heatmap */}
//             <ActivityHeatmap data={stats.submissionCalendar} />
            
//         </motion.div>
//     );
// }


// // components/leetcode-stats.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//     FiTrendingUp, FiCheckCircle, FiAward, FiGitMerge, FiCalendar,
//     FiZap, FiRepeat
// } from "react-icons/fi";
// import { FaTrophy, FaLaptopCode } from "react-icons/fa";

// // --- Types and Interfaces ---
// type StatsResponse = {
//     totalSolved: number;
//     totalQuestions: number;
//     easySolved: number;
//     totalEasy: number;
//     mediumSolved: number;
//     totalMedium: number;
//     hardSolved: number;
//     totalHard: number;
//     acceptanceRate: number;
//     ranking: number;
//     contributionPoints: number;
//     reputation: number;
//     submissionCalendar: Record<string, number>;
// };

// type CompeteApiResponse = {
//     data: {
//         matchedUser: {
//             languageProblemCount: { languageName: string; problemsSolved: number }[];
//             userCalendar: { streak: number; totalActiveDays: number };
//         };
//         userContestRanking: {
//             attendedContestsCount: number;
//             globalRanking: number;
//             rating: number;
//             topPercentage: number;
//         };
//     };
// };

// type CombinedStats = {
//     stats: StatsResponse;
//     competeStats: CompeteApiResponse['data'];
// };

// // --- Framer Motion Variants ---
// const containerVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.08 } },
// };

// const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// // --- Reusable Sub-Components ---

// const StatCard = ({ icon, label, value, color, smallText = "" }: { icon: React.ReactNode; label: string; value: string | number; color: string; smallText?: string }) => (
//     <motion.div
//         variants={itemVariants}
//         className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg flex items-center space-x-3 transition-transform duration-200 hover:-translate-y-1"
//     >
//         <div className={`p-3 rounded-full ${color}`}>
//             {icon}
//         </div>
//         <div>
//             <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
//             <p className="text-lg font-bold text-gray-800 dark:text-white">
//                 {value} <span className="text-sm font-normal">{smallText}</span>
//             </p>
//         </div>
//     </motion.div>
// );

// const CircularProgress = ({ percentage, children }: { percentage: number; children: React.ReactNode }) => {
//     const CIRCLE_LENGTH = 2 * Math.PI * 46;
//     return (
//         <div className="relative w-32 h-32">
//             <svg className="w-full h-full" viewBox="0 0 100 100">
//                 <circle cx="50" cy="50" r="46" strokeWidth="8" className="stroke-gray-200 dark:stroke-gray-700" fill="none" />
//                 <motion.circle
//                     cx="50" cy="50" r="46" strokeWidth="8" fill="none" strokeLinecap="round" transform="rotate(-90 50 50)"
//                     className="stroke-blue-500"
//                     strokeDasharray={CIRCLE_LENGTH}
//                     initial={{ strokeDashoffset: CIRCLE_LENGTH }}
//                     animate={{ strokeDashoffset: CIRCLE_LENGTH * (1 - percentage / 100) }}
//                     transition={{ duration: 1.5, ease: "circOut" }}
//                 />
//             </svg>
//             <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
//         </div>
//     );
// };

// const DifficultyBar = ({ label, solved, total, colorClass }: { label: string; solved: number; total: number; colorClass: string }) => {
//     const percentage = total > 0 ? (solved / total) * 100 : 0;
//     return (
//         <div className="w-full">
//             <div className="flex justify-between items-center mb-1">
//                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
//                 <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{solved} / {total}</span>
//             </div>
//             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
//                 <motion.div className={`h-2.5 rounded-full ${colorClass}`} initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 1.2, ease: "easeOut" }}/>
//             </div>
//         </div>
//     );
// };

// const ActivityHeatmap = ({ data }: { data: Record<string, number> }) => {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const startDate = new Date(currentYear, 0, 1);
//     const endDate = new Date(currentYear, 11, 31);
//     const submissionMap = Object.entries(data).reduce((acc, [timestamp, count]) => (acc[new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0]] = count, acc), {} as Record<string, number>);
//     const daysInYear = Array.from({ length: 365 }, (_, i) => new Date(startDate.getFullYear(), 0, startDate.getDate() + i));
//     const allCells = [...Array.from({ length: startDate.getDay() }, () => null), ...daysInYear];
//     const weeks = Array.from({ length: Math.ceil(allCells.length / 7) }, (_, i) => allCells.slice(i * 7, i * 7 + 7));
//     const monthStartWeeks = new Set(weeks.reduce((acc, week, i) => (week.some(day => day?.getDate() === 1) && acc.push(i), acc), [] as number[]));
//     const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const getDayColorClass = (count: number) => count > 8 ? 'bg-green-600' : count > 5 ? 'bg-green-500' : count > 2 ? 'bg-green-400' : count > 0 ? 'bg-green-300' : 'bg-gray-200 dark:bg-gray-800';

//     return (
//         <motion.div variants={itemVariants} className="w-full">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><FiCalendar className="mr-2 text-gray-500" />Contribution Activity</h3>
//             <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
//                 <div className="flex justify-around text-xs text-gray-400 mb-2">{monthLabels.map(name => <div key={name} className="flex-1 text-center">{name}</div>)}</div>
//                 <div className="flex gap-[3px]">
//                     {weeks.map((week, weekIndex) => (
//                         <React.Fragment key={weekIndex}>
//                             {monthStartWeeks.has(weekIndex) && weekIndex > 0 && <div className="w-[12px]" />}
//                             <div className="flex flex-col gap-[3px]">
//                                 {week.map((day, dayIndex) => {
//                                     if (!day) return <div key={`ph-${weekIndex}-${dayIndex}`} className="w-[12px] h-[12px] bg-transparent rounded-sm" />;
//                                     const dateString = day.toISOString().split('T')[0];
//                                     const count = submissionMap[dateString] || 0;
//                                     const colorClass = day > today ? 'bg-gray-200 dark:bg-gray-800 opacity-50' : getDayColorClass(count);
//                                     return <div key={day.toISOString()} className={`w-[12px] h-[12px] rounded-sm ${colorClass}`} title={day > today ? 'Future Date' : `${dateString}: ${count} submissions`} />;
//                                 })}
//                             </div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// const ContestStatsCard = ({ ranking }: { ranking: CompeteApiResponse['data']['userContestRanking'] }) => (
//     <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg h-full">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><FaTrophy className="mr-2 text-amber-500" />Contest Performance</h3>
//         <div className="space-y-4 text-sm">
//             <div className="flex justify-between items-center"><span>Rating</span><span className="font-bold">{Math.round(ranking.rating)}</span></div>
//             <div className="flex justify-between items-center"><span>Global Ranking</span><span className="font-bold">{ranking.globalRanking.toLocaleString()}</span></div>
//             <div className="flex justify-between items-center"><span>Top Percentage</span><span className="font-bold text-green-500">{ranking.topPercentage.toFixed(2)}%</span></div>
//             <div className="flex justify-between items-center"><span>Contests Attended</span><span className="font-bold">{ranking.attendedContestsCount}</span></div>
//         </div>
//     </motion.div>
// );

// const LanguageStatsCard = ({ languages }: { languages: CompeteApiResponse['data']['matchedUser']['languageProblemCount'] }) => {
//     const total = languages.reduce((sum, lang) => sum + lang.problemsSolved, 0);
//     return (
//         <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg h-full">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><FaLaptopCode className="mr-2 text-sky-500" />Language Skills</h3>
//             <div className="space-y-3">
//                 {languages.slice(0, 5).map(lang => (
//                     <div key={lang.languageName}>
//                         <div className="flex justify-between text-xs mb-1"><span className="font-medium">{lang.languageName}</span><span>{lang.problemsSolved} solved</span></div>
//                         <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5"><div className="bg-sky-500 h-1.5 rounded-full" style={{ width: `${total > 0 ? (lang.problemsSolved / total) * 100 : 0}%` }}></div></div>
//                     </div>
//                 ))}
//             </div>
//         </motion.div>
//     );
// };

// const BadgeShowcase = ({ username, isDarkMode }: { username: string; isDarkMode: boolean }) => (
//      <motion.div variants={itemVariants} className="h-full flex flex-col">
//         <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center shrink-0"><FiAward className="mr-2 text-gray-500" />Badge Showcase</h3>
//         <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg flex justify-center items-center grow">
//            <Image 
//                src={`https://leetcode-badge-showcase.vercel.app/api?username=${username}&theme=${isDarkMode ? 'dark' : 'light'}&border=no-border`} 
//                alt="LeetCode Badges"
//                width={350}
//                height={250}
//                className="object-contain w-full h-full"
//                unoptimized
//            />
//         </div>
//     </motion.div>
// );

// // --- Main Component ---
// export default function LeetcodeStats() {
//     const [allStats, setAllStats] = useState<CombinedStats | null>(null);
//     const [error, setError] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     const username = process.env.NEXT_PUBLIC_LEETCODE_USERNAME;

//     useEffect(() => {
//         const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//         setIsDarkMode(mediaQuery.matches);
//         const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
//         mediaQuery.addEventListener('change', handler);

//         if (!username) { setError("LeetCode username is not set."); setIsLoading(false); return; }

//         const fetchAllStats = async () => {
//             try {
//                 const [statsRes, competeRes] = await Promise.all([
//                     fetch(`https://leetcode-stats-api.herokuapp.com/${username}`),
//                     fetch(`https://competeapi.vercel.app/user/leetcode/${username}/`),
//                 ]);
//                 if (!statsRes.ok || !competeRes.ok) throw new Error('Failed to fetch data');
//                 const statsData: StatsResponse = await statsRes.json();
//                 const competeData: CompeteApiResponse = await competeRes.json();
//                 if (!statsData || !competeData?.data) throw new Error('Invalid data received');
//                 setAllStats({ stats: statsData, competeStats: competeData.data });
//             } catch (err: any) { setError(err.message) } 
//             finally { setIsLoading(false) }
//         };

//         fetchAllStats();
//         return () => mediaQuery.removeEventListener('change', handler);
//     }, [username]);

//     if (isLoading) return <div className="w-full max-w-6xl min-h-[600px] flex items-center justify-center"><p>Loading Full LeetCode Dashboard...</p></div>;
//     if (error) return <div className="w-full max-w-6xl bg-red-100 text-red-700 p-8 rounded-2xl text-center">Error: {error}</div>;
//     if (!allStats) return null;
    
//     const { stats, competeStats } = allStats;

//     return (
//         <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             className="w-full max-w-6xl bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
//         >
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* --- Row 1, Col 1-2: Main Overview --- */}
//                 <motion.div variants={itemVariants} className="lg:col-span-2 flex items-center bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
//                     <div className="flex-shrink-0">
//                         <CircularProgress percentage={(stats.totalSolved / stats.totalQuestions) * 100}>
//                             <span className="text-3xl font-bold">{stats.totalSolved}</span>
//                             <span className="text-sm text-gray-500">Solved</span>
//                         </CircularProgress>
//                     </div>
//                     <div className="w-full flex flex-col space-y-3 pl-6">
//                         <DifficultyBar label="Easy" solved={stats.easySolved} total={stats.totalEasy} colorClass="bg-green-500" />
//                         <DifficultyBar label="Medium" solved={stats.mediumSolved} total={stats.totalMedium} colorClass="bg-yellow-500" />
//                         <DifficultyBar label="Hard" solved={stats.hardSolved} total={stats.totalHard} colorClass="bg-red-500" />
//                     </div>
//                 </motion.div>

//                 {/* --- Row 1-2, Col 3: Badge Showcase --- */}
//                 <div className="lg:col-span-1 lg:row-span-2">
//                     <BadgeShowcase username={username!} isDarkMode={isDarkMode} />
//                 </div>

//                 {/* --- Row 2, Col 1: Contest Performance --- */}
//                 <div className="lg:col-span-1">
//                      <ContestStatsCard ranking={competeStats.userContestRanking} />
//                 </div>
                
//                 {/* --- Row 2, Col 2: Language Skills --- */}
//                 <div className="lg:col-span-1">
//                     <LanguageStatsCard languages={competeStats.matchedUser.languageProblemCount} />
//                 </div>

//                 {/* --- Row 3, Col 1-3: Key Metrics --- */}
//                 <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
//                     <StatCard icon={<FiTrendingUp size={20} />} label="Ranking" value={stats.ranking.toLocaleString()} color="bg-purple-200 dark:bg-purple-900/50" />
//                     <StatCard icon={<FiCheckCircle size={20} />} label="Acceptance" value={`${stats.acceptanceRate.toFixed(1)}%`} color="bg-teal-200 dark:bg-teal-900/50" />
//                     <StatCard icon={<FiZap size={20} />} label="Streak" value={competeStats.matchedUser.userCalendar.streak} smallText="days" color="bg-red-200 dark:bg-red-900/50" />
//                     <StatCard icon={<FiRepeat size={20} />} label="Active Days" value={competeStats.matchedUser.userCalendar.totalActiveDays} color="bg-orange-200 dark:bg-orange-900/50" />
//                 </div>

//                 {/* --- Row 4, Col 1-3: Heatmap --- */}
//                 <div className="lg:col-span-3">
//                     <ActivityHeatmap data={stats.submissionCalendar} />
//                 </div>
//             </div>
//         </motion.div>
//     );
// }


// components/leetcode-stats.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    FiTrendingUp, FiCheckCircle, FiAward, FiGitMerge, FiCalendar,
    FiZap, FiRepeat
} from "react-icons/fi";
import { FaTrophy, FaLaptopCode } from "react-icons/fa";

// --- Types and Interfaces ---
type StatsResponse = {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    acceptanceRate: number;
    ranking: number;
    contributionPoints: number;
    reputation: number;
    submissionCalendar: Record<string, number>;
};

type CompeteApiResponse = {
    data: {
        matchedUser: {
            languageProblemCount: { languageName: string; problemsSolved: number }[];
            userCalendar: { streak: number; totalActiveDays: number };
        };
        userContestRanking: {
            attendedContestsCount: number;
            globalRanking: number;
            rating: number;
            topPercentage: number;
        };
    };
};

type CombinedStats = {
    stats: StatsResponse;
    competeStats: CompeteApiResponse['data'];
};

// --- Framer Motion Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Reusable Sub-Components ---

const StatCard = ({ icon, label, value, color, smallText = "" }: { icon: React.ReactNode; label: string; value: string | number; color: string; smallText?: string }) => (
    <motion.div
        variants={itemVariants}
        className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg flex items-center space-x-3 transition-transform duration-200 hover:-translate-y-1"
    >
        <div className={`p-3 rounded-full ${color}`}>
            {icon}
        </div>
        <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
            <p className="text-lg font-bold text-gray-800 dark:text-white">
                {value} <span className="text-sm font-normal">{smallText}</span>
            </p>
        </div>
    </motion.div>
);

const CircularProgress = ({ percentage, children }: { percentage: number; children: React.ReactNode }) => {
    const CIRCLE_LENGTH = 2 * Math.PI * 46;
    return (
        <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" strokeWidth="8" className="stroke-gray-200 dark:stroke-gray-700" fill="none" />
                <motion.circle
                    cx="50" cy="50" r="46" strokeWidth="8" fill="none" strokeLinecap="round" transform="rotate(-90 50 50)"
                    className="stroke-blue-500"
                    strokeDasharray={CIRCLE_LENGTH}
                    initial={{ strokeDashoffset: CIRCLE_LENGTH }}
                    animate={{ strokeDashoffset: CIRCLE_LENGTH * (1 - percentage / 100) }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
        </div>
    );
};

const DifficultyBar = ({ label, solved, total, colorClass }: { label: string; solved: number; total: number; colorClass: string }) => {
    const percentage = total > 0 ? (solved / total) * 100 : 0;
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
                <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{solved} / {total}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div className={`h-2.5 rounded-full ${colorClass}`} initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 1.2, ease: "easeOut" }}/>
            </div>
        </div>
    );
};

const ActivityHeatmap = ({ data }: { data: Record<string, number> }) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const startDate = new Date(currentYear, 0, 1);
    const submissionMap = Object.entries(data).reduce((acc, [timestamp, count]) => (acc[new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0]] = count, acc), {} as Record<string, number>);
    const daysInYear = Array.from({ length: 365 }, (_, i) => new Date(startDate.getFullYear(), 0, startDate.getDate() + i));
    const allCells = [...Array.from({ length: startDate.getDay() }, () => null), ...daysInYear];
    const weeks = Array.from({ length: Math.ceil(allCells.length / 7) }, (_, i) => allCells.slice(i * 7, i * 7 + 7));
    const monthStartWeeks = new Set(weeks.reduce((acc, week, i) => (week.some(day => day?.getDate() === 1) && acc.push(i), acc), [] as number[]));
    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const getDayColorClass = (count: number) => count > 8 ? 'bg-green-600' : count > 5 ? 'bg-green-500' : count > 2 ? 'bg-green-400' : count > 0 ? 'bg-green-300' : 'bg-gray-200 dark:bg-gray-800';

    return (
        <motion.div variants={itemVariants} className="w-full">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><FiCalendar className="mr-2 text-gray-500" />Contribution Activity</h3>
            {/* THE FIX IS HERE: Added overflow-x-auto to make the container scrollable on small screens */}
            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg overflow-x-auto">
                <div className="flex justify-around text-xs text-gray-400 mb-2">{monthLabels.map(name => <div key={name} className="flex-1 text-center min-w-[50px]">{name}</div>)}</div>
                <div className="flex gap-[3px]">
                    {weeks.map((week, weekIndex) => (
                        <React.Fragment key={weekIndex}>
                            {monthStartWeeks.has(weekIndex) && weekIndex > 0 && <div className="w-[12px]" />}
                            <div className="flex flex-col gap-[3px]">
                                {week.map((day, dayIndex) => {
                                    if (!day) return <div key={`ph-${weekIndex}-${dayIndex}`} className="w-[12px] h-[12px] bg-transparent rounded-sm" />;
                                    const dateString = day.toISOString().split('T')[0];
                                    const count = submissionMap[dateString] || 0;
                                    const colorClass = day > today ? 'bg-gray-200 dark:bg-gray-800 opacity-50' : getDayColorClass(count);
                                    return <div key={day.toISOString()} className={`w-[12px] h-[12px] rounded-sm ${colorClass}`} title={day > today ? 'Future Date' : `${dateString}: ${count} submissions`} />;
                                })}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ContestStatsCard = ({ ranking }: { ranking: CompeteApiResponse['data']['userContestRanking'] }) => (
    <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg h-full">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><FaTrophy className="mr-2 text-amber-500" />Contest Performance</h3>
        <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center"><span>Rating</span><span className="font-bold">{Math.round(ranking.rating)}</span></div>
            <div className="flex justify-between items-center"><span>Global Ranking</span><span className="font-bold">{ranking.globalRanking.toLocaleString()}</span></div>
            <div className="flex justify-between items-center"><span>Top Percentage</span><span className="font-bold text-green-500">{ranking.topPercentage.toFixed(2)}%</span></div>
            <div className="flex justify-between items-center"><span>Contests Attended</span><span className="font-bold">{ranking.attendedContestsCount}</span></div>
        </div>
    </motion.div>
);

const LanguageStatsCard = ({ languages }: { languages: CompeteApiResponse['data']['matchedUser']['languageProblemCount'] }) => {
    const total = languages.reduce((sum, lang) => sum + lang.problemsSolved, 0);
    return (
        <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg h-full">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center"><FaLaptopCode className="mr-2 text-sky-500" />Language Skills</h3>
            <div className="space-y-3">
                {languages.slice(0, 5).map(lang => (
                    <div key={lang.languageName}>
                        <div className="flex justify-between text-xs mb-1"><span className="font-medium">{lang.languageName}</span><span>{lang.problemsSolved} solved</span></div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5"><div className="bg-sky-500 h-1.5 rounded-full" style={{ width: `${total > 0 ? (lang.problemsSolved / total) * 100 : 0}%` }}></div></div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const BadgeShowcase = ({ username, isDarkMode }: { username: string; isDarkMode: boolean }) => (
     <motion.div variants={itemVariants} className="h-full flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center shrink-0"><FiAward className="mr-2 text-gray-500" />Badge Showcase</h3>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg flex justify-center items-center grow">
           <Image 
               src={`https://leetcode-badge-showcase.vercel.app/api?username=${username}&theme=${isDarkMode ? 'dark' : 'light'}&border=no-border`} 
               alt="LeetCode Badges"
               width={350}
               height={250}
               className="object-contain w-full h-full"
               unoptimized
           />
        </div>
    </motion.div>
);

// --- Main Component ---
export default function LeetcodeStats() {
    const [allStats, setAllStats] = useState<CombinedStats | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const username = process.env.NEXT_PUBLIC_LEETCODE_USERNAME;

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);

        if (!username) { setError("LeetCode username is not set."); setIsLoading(false); return; }

        const fetchAllStats = async () => {
            try {
                const [statsRes, competeRes] = await Promise.all([
                    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`),
                    fetch(`https://competeapi.vercel.app/user/leetcode/${username}/`),
                ]);
                if (!statsRes.ok || !competeRes.ok) throw new Error('Failed to fetch data');
                const statsData: StatsResponse = await statsRes.json();
                const competeData: CompeteApiResponse = await competeRes.json();
                if (!statsData || !competeData?.data) throw new Error('Invalid data received');
                setAllStats({ stats: statsData, competeStats: competeData.data });
            } catch (err: any) { setError(err.message) } 
            finally { setIsLoading(false) }
        };

        fetchAllStats();
        return () => mediaQuery.removeEventListener('change', handler);
    }, [username]);

    if (isLoading) return <div className="w-full max-w-6xl min-h-[600px] flex items-center justify-center"><p>Loading Full LeetCode Dashboard...</p></div>;
    if (error) return <div className="w-full max-w-6xl bg-red-100 text-red-700 p-8 rounded-2xl text-center">Error: {error}</div>;
    if (!allStats) return null;
    
    const { stats, competeStats } = allStats;

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-6xl bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- Row 1, Col 1-2: Main Overview --- */}
                <motion.div variants={itemVariants} className="lg:col-span-2 flex items-center bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
                    <div className="flex-shrink-0">
                        <CircularProgress percentage={(stats.totalSolved / stats.totalQuestions) * 100}>
                            <span className="text-3xl font-bold">{stats.totalSolved}</span>
                            <span className="text-sm text-gray-500">Solved</span>
                        </CircularProgress>
                    </div>
                    <div className="w-full flex flex-col space-y-3 pl-6">
                        <DifficultyBar label="Easy" solved={stats.easySolved} total={stats.totalEasy} colorClass="bg-green-500" />
                        <DifficultyBar label="Medium" solved={stats.mediumSolved} total={stats.totalMedium} colorClass="bg-yellow-500" />
                        <DifficultyBar label="Hard" solved={stats.hardSolved} total={stats.totalHard} colorClass="bg-red-500" />
                    </div>
                </motion.div>

                {/* --- Row 1-2, Col 3: Badge Showcase --- */}
                <div className="lg:col-span-1 lg:row-span-2">
                    <BadgeShowcase username={username!} isDarkMode={isDarkMode} />
                </div>

                {/* --- Row 2, Col 1: Contest Performance --- */}
                <div className="lg:col-span-1">
                     <ContestStatsCard ranking={competeStats.userContestRanking} />
                </div>
                
                {/* --- Row 2, Col 2: Language Skills --- */}
                <div className="lg:col-span-1">
                    <LanguageStatsCard languages={competeStats.matchedUser.languageProblemCount} />
                </div>

                {/* --- Row 3, Col 1-3: Key Metrics --- */}
                <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard icon={<FiTrendingUp size={20} />} label="Ranking" value={stats.ranking.toLocaleString()} color="bg-purple-200 dark:bg-purple-900/50" />
                    <StatCard icon={<FiCheckCircle size={20} />} label="Acceptance" value={`${stats.acceptanceRate.toFixed(1)}%`} color="bg-teal-200 dark:bg-teal-900/50" />
                    <StatCard icon={<FiZap size={20} />} label="Streak" value={competeStats.matchedUser.userCalendar.streak} smallText="days" color="bg-red-200 dark:bg-red-900/50" />
                    <StatCard icon={<FiRepeat size={20} />} label="Active Days" value={competeStats.matchedUser.userCalendar.totalActiveDays} color="bg-orange-200 dark:bg-orange-900/50" />
                </div>

                {/* --- Row 4, Col 1-3: Heatmap --- */}
                <div className="lg:col-span-3">
                    <ActivityHeatmap data={stats.submissionCalendar} />
                </div>
            </div>
        </motion.div>
    );
}