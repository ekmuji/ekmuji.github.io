// Import the Supabase JavaScript client
import { createClient} from 'https:cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
// Initialize Supabase client
const supabaseUrl = 'https://ebjgvzgmzsctyehflprk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViamd2emdtenNjdHllaGZscHJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NDg5NjksImV4cCI6MjAzMTAyNDk2OX0.IQ_P6eR10IGJCIr95sYbsXu4zuBoTChZ73-XIVqckio';
const supabase = createClient(supabaseUrl, supabaseKey);


// Function to increase font size
function increaseFontSize() {
    changeFontSize(2);
}

// Function to decrease font size
function decreaseFontSize() {
    changeFontSize(-2);
}

// Function to change font size
function changeFontSize(changeAmount) {
    const body = document.body;
    const currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    const newFontSize = currentFontSize + changeAmount;
    body.style.fontSize = newFontSize + 'px';
}

export async function fetchPeople() {
    const { data, error } = await supabase.from('People').select();
    console.log('Fetched data:', data);
}

export async function fetchVehicles() {
    const { data, error } = await supabase.from('Vehicles').select();
    console.log('Fetched data:', data);
}

document.querySelector('#button1').addEventListener('click', fetchPeople);
document.querySelector('#button2').addEventListener('click', fetchVehicles);
