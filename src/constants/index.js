import { tabOne, tabTwo, tabThree, chrome, firefox, opera} from "../images"

export const navLinks = [
    {
        id: 1,
        title: "FEATURES",
    },
    {
        id: 2,
        title: "PRICING",
    },
    {
        id: 3,
        title: "CONTACT",
    },

];

export const data = [
    {
        id: 1,
        title: "Bookmark in one click",
        desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        link: "More Info",
        button: "Simple Bookmarking",
        image: tabOne,
    },
    {
        id: 2,
        title: "Intelligent search",
        desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        link: "More Info",
        button: "Speedy Searching",
        image: tabTwo,
    },
    {
        id: 3,
        title: "Share your bookmarks",
        desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        link: "More Info",
        button: "Easy Sharing",
        image: tabThree,
    },
];

export const extensions = [
    { 
        id:1,
        image: chrome,
        browser:"Add to Chrome",
        version:"Minimum version 62",
    },
    { 
        id:2,
        image: firefox,
        browser:"Add to Firefox",
        version:"Minimum version 55",
    },
    { 
        id:3,
        image: opera,
        browser:"Add to Opera",
        version:"Minimum version 46",
    }

];

export const questions = [
    {
        id: 1,
        question: "What is Bookmark?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
        id: 2,
        question: "How can I request a new browser?",
        answer:
            "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue, non ligula. Mauris augue massa, ultricies non ligula.",
    },
    {
        id: 3,
        question: "Is there a mobile app?",
        answer:
            "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum vulputate eget. Cras in ligula quis est pharetra mattis sit amet purus. Mauris augue massa, ultricies non ligula.",
    },
    {
        id: 4,
        question: "What about other Chromium browsers?",
        answer:
            "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
];