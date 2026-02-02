JavaScript-এ Date/Time সংক্রান্ত সংক্ষিপ্ত সামারি

Date তৈরি ও ব্যবহার

new Date() দিয়ে আজকের তারিখ পাওয়া যায়।

নির্দিষ্ট তারিখ সেট করতে পারো:

new Date(year, monthIndex, day, hours, minutes, seconds)

monthIndex = 0 থেকে শুরু (জানুয়ারি = 0)

day, hours, minutes ইত্যাদি অনান্য ইনডেক্স অনুযায়ী ব্যবহার করা হয়।

Date থেকে তথ্য বের করা

getDate() → মাসের দিন

getMonth() → মাসের ইনডেক্স

getDay() → সপ্তাহের দিন (রোববার = 0)

getFullYear() → বছর

getHours(), getMinutes(), getSeconds() ইত্যাদি

Date সেট করা

setMonth(), setDate(), setFullYear() ব্যবহার করে মান পরিবর্তন করা যায়।

মান পরিবর্তনের পরে console.log() দিয়ে নতুন অবস্থা দেখা যায়।

Date ফরম্যাটিং

toString(), toLocaleString(), toISOString() ইত্যাদি।

দেশভেদে তারিখের ফরম্যাট পরিবর্তিত হয় (যেমন: US = MM/DD/YYYY, Bangladesh = DD/MM/YYYY)

Unix Epoch / Timestamp

1 জানুয়ারি 1970 থেকে এখন পর্যন্ত সময় সেকেন্ড বা মিলিসেকেন্ডে পাওয়া যায়।

দুইটি তারিখের মধ্যে সময়ের ব্যবধান বের করতে কাজে লাগে।

Time Zone ও Daylight Saving

সময় অঞ্চল (UTC) অনুযায়ী সময় হিসাব করতে হয়।

Daylight Saving এর কারণে বিভিন্ন দেশের একই সময় পরিবর্তিত হতে পারে।

Moment.js ও অন্যান্য লাইব্রেরি

Moment.js ব্যবহার করে সময়ের ফরম্যাটিং, তুলনা ও প্রদর্শন সহজ হয়।

কোর্সের লেটার মডিউলে Moment.js ব্যবহার দেখানো হবে।

 মূল ধারণা:
JavaScript-এ Date অবজেক্ট দিয়ে আমরা যেকোনো তারিখ ও সময়ের তথ্য বের করতে, সেট করতে এবং ফরম্যাট করতে পারি। Unix Epoch এবং Time Zone বিষয়গুলো সময় সম্পর্কিত হিসাব ও তুলনা করার জন্য গুরুত্বপূর্ণ।
