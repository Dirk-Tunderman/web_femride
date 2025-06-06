
import { Button } from "@/components/ui/button";

/**
 * EarnSection component highlighting different ways to earn money with FemRide
 */
const EarnSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Earn money with FemRide</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Join over 4.5 million partners worldwide that earn with FemRide. For drivers,
            couriers, merchants, and fleet owners looking for new ways to boost
            revenue.
          </p>
        </div>

        {/* Driver Opportunity */}
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Driver behind the wheel of a car" 
              className="rounded-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-2">Earn money as a FemRide driver</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Drive and earn money</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our 200+ million riders will send you plenty of ride requests.
              When demand is high, you can earn even more.
            </p>
            <div>
              <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-md px-6 py-5">
                Register to drive
              </Button>
            </div>
          </div>
        </div>

        {/* Courier Opportunity */}
        <div className="flex flex-col md:flex-row-reverse gap-8 mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Courier with FemRide Food delivery bag" 
              className="rounded-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-2">Become a FemRide courier partner</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Earn with every delivery</h3>
            <p className="text-lg text-gray-700 mb-6">
              You decide when and how often you deliver — weekdays,
              evenings, weekends, or just the occasional hour — it's up to
              you.
            </p>
            <div>
              <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-md px-6 py-5">
                Register as a courier
              </Button>
            </div>
          </div>
        </div>

        {/* Merchant Opportunity */}
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Merchant holding a phone with FemRide Food app" 
              className="rounded-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-2">Increase earnings as merchant</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Increase your sales and reach new customers</h3>
            <p className="text-lg text-gray-700 mb-6">
              Millions of our users are ordering food or goods from
              restaurants and stores just like yours.
            </p>
            <div>
              <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-md px-6 py-5">
                Register with FemRide Food
              </Button>
            </div>
          </div>
        </div>

        {/* Fleet Owner Opportunity */}
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Woman driver in a FemRide vehicle" 
              className="rounded-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-2">Join FemRide with your fleet and earn more</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Grow your transport business</h3>
            <p className="text-lg text-gray-700 mb-6">
              As a fleet owner and FemRide partner, you can manage your
              assets from one easy-to-use dashboard and grow your
              transport business.
            </p>
            <div>
              <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-md px-6 py-5">
                Register your fleet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
