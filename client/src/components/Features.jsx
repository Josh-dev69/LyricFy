import { features } from "../constants/index";
const Features = () => {
    return (
        <section id='features' className='py-16 bg-gray-100'>
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12'>Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 border rounded-lg shadow-lg flex flex-col items-center bg-white" >
                            <div className="text-4xl mb-4 text-green-600">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}

export default Features;
