Function / Property ব্যবহার / কাজ উদাহরণ ফলাফল
Math.min(a, b, ...) দেওয়া সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে Math.min(4, 9, -2) -2
Math.max(a, b, ...) দেওয়া সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যা বের করে Math.max(4, 9, -2) 9
Math.PI পাই-এর মান (~3.14159) Math.PI 3.141592653589793
Math.abs(x) Absolute value (চিহ্ন বাদ দিয়ে) Math.abs(-88) 88
Math.round(x) নিকটতম পূর্ণসংখ্যায় রাউন্ড করে Math.round(4.2) 4
Math.round(x) Math.round(4.8) 5
Math.floor(x) নিচের দিকে রাউন্ড করে (ভগ্নাংশ ফেলে) Math.floor(2.95) 2
Math.ceil(x) উপরের দিকে রাউন্ড করে Math.ceil(2.25) 3
Math.random() 0 থেকে 1 এর মধ্যে রেনডম সংখ্যা Math.random() 0.5432 (প্রতিবার পরিবর্তন)
Math.random() _ n 0 থেকে n-এর মধ্যে রেনডম সংখ্যা Math.random() _ 10 0 - 10
Math.floor(Math.random() _ n) 0 থেকে n-1 পর্যন্ত পূর্ণ সংখ্যা Math.floor(Math.random() _ 10) 0 - 9
Math.round(Math.random() _ n) 0 থেকে n পর্যন্ত পূর্ণ সংখ্যা Math.round(Math.random() _ 10) 0 - 10
Math.sin(x) x radians এর sine মান Math.sin(Math.PI/2) 1
Math.cos(x) x radians এর cosine মান Math.cos(0) 1
Math.tan(x) x radians এর tangent মান Math.tan(Math.PI/4) 1
Math.log(x) x এর natural log (ln) Math.log(10) 2.302585...
Math.exp(x) e-এর x ঘাত Math.exp(1) 2.71828...
Math.pow(a, b) a-এর b ঘাত Math.pow(2, 3) 8

টিপস:

Math.min() এবং Math.max() এর মধ্যে যত খুশি সংখ্যা দিতে পারো।

Math.random() এর মাধ্যমে তুমি সহজেই লটারির জন্য বা রেনডম সংখ্যা জেনারেট করতে পারো।

Math.floor() এবং Math.ceil() দিয়ে সংখ্যা “নিচে” বা “উপরে” রাউন্ড করা যায়।

ট্রিগনোমেট্রিক, লগ, এক্সপোনেনশিয়াল, পাওয়ার সবই Math দিয়ে করা যায়।
