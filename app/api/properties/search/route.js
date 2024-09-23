import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/search
export const GET = async (request) => {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const propertyType = searchParams.get('propertyType');
    const category = searchParams.get('category');

    const locationPattern = new RegExp(location, 'i');

    // Match location pattern against database fields
    let query = {
      $or: [
          { name: locationPattern },
        { description: locationPattern },
        { 'location.street': locationPattern },
        { 'location.city': locationPattern },
        { 'location.state': locationPattern },
        { 'location.zipcode': locationPattern },
      ],
    };

    // Only check for property if its not 'All'
    if (propertyType && propertyType !== 'All') {
      const typePattern = new RegExp(propertyType, 'i');
      query.type = typePattern;
    }

    // Only check for category if its not 'All'
    if (category && category !== 'All') {
      const categoryPattern = new RegExp(category, 'i');
      query.category = categoryPattern;
    }

    const properties = await Property.find(query);

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

  // // GET /api/properties/search
  // export const GET = async (request) => {
  //   try {
  //     await connectDB();
  
  //     const { searchParams } = new URL(request.url);
  //     const location = searchParams.get('location');
  //     const propertyType = searchParams.get('propertyType');
  //     const category = searchParams.get('category');
  
  //     const locationPattern = new RegExp(location, 'i');
  
  //     // Match location pattern against database fields
  //     let query = {
  //       $or: [
  //         { name: locationPattern },
  //         { description: locationPattern },
  //         { 'location.street': locationPattern },
  //         { 'location.city': locationPattern },
  //         { 'location.state': locationPattern },
  //         { 'location.zipcode': locationPattern },
  //       ],
  //     };
  
  //     // Only check for property if its not 'All'
  //     if (propertyType && propertyType !== 'All') {
  //       const typePattern = new RegExp(propertyType, 'i');
  //       query.type = typePattern;
  //     }
  
  //     // Only check for category if its not 'All'
  //     if (category && category !== 'All') {
  //       const categoryPattern = new RegExp(category, 'i');
  //       query.category = categoryPattern; // Correct field name
  //     }
  
  //     const properties = await Property.find(query);
  
  //     return new Response(JSON.stringify(properties), {
  //       status: 200,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return new Response('Something went wrong', { status: 500 });
  //   }
  // };