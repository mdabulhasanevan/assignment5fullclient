

const Faq = () => {
    return (
        <div className=''>

             <h2 className="font-bold text-center p-3">আপনাদের মনে হুট হাট করে প্রায়শই কিছু প্রশ্ন উকি দেয়। দেখেন তো নিচের প্রশ্নগুলোর মধ্যে কমন পড়েছে কিনা?</h2>

            <hr></hr>
           
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium"> একাউন্ট খুলবো কীভাবে বা লগ ইন করবো কীভাবে?</div>
                    <div className="collapse-content">
                        <p>- ওয়েবসাইট থেকে  ডট কমের হোমপেজে Sign in এবং রকমারি এপ থেকে Account এ গেলে LOGIN / SIGN UP এর অপশন পাবেন । এরপর আপনার ইমেইল বা ফোন নম্বর দিয়ে Next বাটনে ক্লিক করলে আপনার দেওয়া মেইল বা ফোন নম্বরে OTP সেন্ড করা হবে । উক্ত OTP সাবমিট করে Login বাটনে ক্লিক করলে আপনার একাউন্ট ক্রিয়েট এবং লগইন হয়ে যাবে । এরপর মাই প্রফাইল থেকে Add password অপশন থেকে আপনার পছন্দমত পাসওয়ার্ড সেট করে নিতে পারবেন । পরবর্তিতে লগইন করার সময় মেইল বা ফোন নম্বর এবং পাসওয়ার্ড ব্যবহার লগইন করতে পারবেন । যদি একাউন্টে পাসওয়ার্ড সেট না করে থাকেন তাহলে প্রতিবার লগইনের জন্য মেইল বা ফোন নম্বরে পাওয়া OTP সাবমিট করে লগইন করতে হবে।
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">কিভাবে আমার অর্ডারটি ট্র্যাকিং করবো?</div>
                    <div className="collapse-content">
                        <p>- আপনি আপনার  একাউন্টে লগ ইন করে My Account থেকে My Order এ ক্লিক করে অর্ডারটি ট্র্যাক করতে পারবেন। অর্ডার ট্র্যাক পেইজ থেকে সম্ভাব্য ডেলিভারির তারিখ, অর্ডারের সর্বশেষ অবস্থা, প্রতিটি প্রোডাক্টের অবস্থা জানা যাবে এবং পেমেন্ট প্রদান করাসহ অর্ডার সংক্রান্ত যেকোন ইস্যু সাবমিট করা যাবে।
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">অর্ডারের প্রোডাক্ট আনএভেইলেবল হয় কেন?</div>
                    <div className="collapse-content">
                        <p>- গ্রাহকদের সর্বোচ্চ সেবা নিশ্চিত করতে রকমারিতে রয়েছে সুবিশাল ইনভেন্টরি। এরপরেও নট ইনস্টকের প্রোডাক্টগুলো সাপ্লায়ারের নিকট থেকে সংগ্রহ করতে হয়। কিছু ক্ষেত্রে প্রোডাক্টগুলো সাপ্লায়ারের কাছে স্টক শেষ হয়ে যাওয়ায় অর্ডারকৃত প্রোডাক্ট আমরা সরবরাহ করতে পারিনা।</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">আচ্ছা, হাতে পেয়ে দেখলাম সঠিক পণ্য আসে না বা কোন কারণে খারাপ বা নস্ট পণ্য পেয়েছি। তখন কী করবো?</div>
                    <div className="collapse-content">
                        <p>- রকমারি থেকে প্রোডাক্ট কিনে হতাশ হতে হয়েছে এমনটা খুব কমই হয়। কিন্তু কেউই তো আর ভুলের ঊর্ধ্বে নয়, তেমনি আমরাও এতো বিশাল অপারেশন চালাতে গিয়ে ভুল করে ফেলতেই পারি। ত্রুটিযুক্ত প্রোডাক্টের ক্ষেত্রে রকমারি দিচ্ছে হ্যাপি রিটার্ন সুবিধা। ৭ দিনের মধ্যে প্রোডাক্টের সমস্যা জানিয়ে বুঝে নিন ফ্রেশ প্রোডাক্ট অথবা রিফান্ড রকমারি থেকে। বিস্তারিত জানতে ভিজিট করুন আমাদের রিটার্ন নীতিমালা।</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">প্রোডাক্ট রিভিউ ও রেটিং কি? কিভাবে রিভিউ ও রেটিং দিতে পারবো?</div>
                    <div className="collapse-content">
                        <p>- রকমারি থেকে কোন প্রোডাক্ট কেনার পর প্রডাক্টের কোয়ালিটি, গুনগত মান ও আপনার সন্তুষ্টির বা আপনার মূল্যবান মতামত প্রকাশের জন্য রিভিউ ও রেটিং দেয়ার ব্যবস্থা রাখা হয়েছে। রিভিউ ও রেটিং দেওয়ার জন্য রকমারি ওয়েবসাইট বা এপ থেকে ক্রয়কৃত প্রডাক্টের নিচের অংশের Rate this product এবং write a review অপশন রাখা হয়েছে। রেটিং সর্বনিম্ন ১ স্টার থেকে সর্বোচ্চ ৫ স্টার পর্যন্ত দেয়া যাবে। রিভিউ সর্বনিম্ন ৩০ টি শব্দ এবং প্রোডাক্ট/প্যাকেটের ছবি সংযুক্ত করে দিতে পারবেন। এছাড়া ক্যাম্পেইন চলাকালীন রিভিউ ও রেটিং প্রদান করে আপনি ৫০ পয়েন্ট অর্জন করতে পারবেন।</p>
                    </div>
                </div>
            </div>
            <br></br><br></br>

        </div>
    );
};

export default Faq;