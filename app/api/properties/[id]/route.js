import connectDB from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) return new Response('Property Not Found', { status: 404 });

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};

// DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    const propertyId = params.id;

    const sessionUser = await getSessionUser();

    // Check for session
    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });
    }

    const { userId } = sessionUser;

    await connectDB();

    const property = await Property.findById(propertyId);

    if (!property) return new Response('Property Not Found', { status: 404 });

    // Verify ownership
    if (property.owner.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    await property.deleteOne();

    return new Response('Property Deleted', {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};

// PUT /api/properties/:id
export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });
    }

    const { id } = params;
    const { userId } = sessionUser;

    const formData = await request.formData();

    console.log('Form Data:', Array.from(formData.entries())); // Log form data for debugging

    const amenities = formData.getAll('amenities');

    const existingProperty = await Property.findById(id);

    if (!existingProperty) {
      return new Response('Property does not exist', { status: 404 });
    }

    if (existingProperty.owner.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Convert 'on' to true and null to false
    const isFeatured = formData.get('is_featured') === 'on';

    const propertyData = {
      type: formData.get('type') || existingProperty.type,
      name: formData.get('name') || existingProperty.name,
      description: formData.get('description') || existingProperty.description,
      location: {
        street: formData.get('location.street') || existingProperty.location.street,
        city: formData.get('location.city') || existingProperty.location.city,
        state: formData.get('location.state') || existingProperty.location.state,
        zipcode: formData.get('location.zipcode') || existingProperty.location.zipcode,
      },
      beds: formData.get('beds') || existingProperty.beds,
      baths: formData.get('baths') || existingProperty.baths,
      square_feet: formData.get('square_feet') || existingProperty.square_feet,
      amenities: amenities.length > 0 ? amenities : existingProperty.amenities,
      rates: {
        weekly: formData.get('rates.weekly') || existingProperty.rates.weekly,
        monthly: formData.get('rates.monthly') || existingProperty.rates.monthly,
        nightly: formData.get('rates.nightly') || existingProperty.rates.nightly,
      },
      seller_info: {
        name: formData.get('seller_info.name') || existingProperty.seller_info.name,
        email: formData.get('seller_info.email') || existingProperty.seller_info.email,
        phone: formData.get('seller_info.phone') || existingProperty.seller_info.phone,
      },
      is_featured: isFeatured,

      owner: userId,
    };

    console.log('Property Data to Update:', propertyData); // Log the property data before updating

    const updatedProperty = await Property.findByIdAndUpdate(id, propertyData, { new: true });

    return new Response(JSON.stringify(updatedProperty), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Failed to update property', { status: 500 });
  }
};
