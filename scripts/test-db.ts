import dbConnect from '../src/lib/db';
import User from '../src/models/User';

async function main() {
    console.log('Testing Database Connection...');
    try {
        await dbConnect();
        console.log('✅ Connected to MongoDB successfully.');

        console.log('Testing User User model...');
        const count = await User.countDocuments();
        console.log(`✅ User model responding. Current user count: ${count}`);

    } catch (error) {
        console.error('❌ Error during verification:', error);
        process.exit(1);
    } finally {
        process.exit(0);
    }
}

main();
