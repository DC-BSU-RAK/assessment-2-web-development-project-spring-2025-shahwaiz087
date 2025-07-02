
        const modalContent = {
            science: {
                title: "🔬 Science & Nature Explorer",
                content: `
                    <h2>Amazing Science Topics to Explore:</h2>
                    <ul style="line-height: 2; margin: 20px 0;">
                        <li><strong>Ocean Life:</strong> Discover incredible creatures living in the deep sea</li>
                        <li><strong>Weather Patterns:</strong> Learn how clouds, rain, and storms form</li>
                        <li><strong>Human Body:</strong> Explore how your amazing body works</li>
                        <li><strong>Plant Life:</strong> Understand how plants grow and help our planet</li>
                        <li><strong>Animal Behavior:</strong> Study how different animals survive and thrive</li>
                        <li><strong>Chemistry Basics:</strong> Learn about elements and how they combine</li>
                    </ul>
                    <p><strong>Try this:</strong> Start a nature journal and record your observations about the world around you!</p>
                `
            },
            history: {
                title: "🏛️ History & Culture Explorer",
                content: `
                    <h2>Journey Through Time:</h2>
                    <ul style="line-height: 2; margin: 20px 0;">
                        <li><strong>Ancient Civilizations:</strong> Egypt, Greece, Rome, and their amazing achievements</li>
                        <li><strong>Medieval Times:</strong> Knights, castles, and life in the Middle Ages</li>
                        <li><strong>Exploration Age:</strong> Famous explorers and their incredible journeys</li>
                        <li><strong>World Cultures:</strong> Festivals, traditions, and customs around the globe</li>
                        <li><strong>Important Inventions:</strong> How the wheel, printing press, and electricity changed the world</li>
                        <li><strong>Famous Leaders:</strong> People who shaped history and made a difference</li>
                    </ul>
                    <p><strong>Activity Idea:</strong> Create a timeline of your family history or research your town's past!</p>
                `
            },
            space: {
                title: "🚀 Space & Universe Explorer",
                content: `
                    <h2>Cosmic Adventures Await:</h2>
                    <ul style="line-height: 2; margin: 20px 0;">
                        <li><strong>Solar System:</strong> Explore all eight planets and their unique features</li>
                        <li><strong>Moon Phases:</strong> Understand why the moon changes shape</li>
                        <li><strong>Space Missions:</strong> Learn about astronauts and space exploration</li>
                        <li><strong>Stars & Galaxies:</strong> Discover how stars are born and die</li>
                        <li><strong>Black Holes:</strong> Mysterious cosmic phenomena that bend space and time</li>
                        <li><strong>Life in Space:</strong> Could there be aliens out there?</li>
                    </ul>
                    <p><strong>Stargazing Tip:</strong> Look for the Big Dipper constellation on clear nights - it's easy to spot!</p>
                `
            },
            technology: {
                title: "💻 Technology & Innovation Explorer",
                content: `
                    <h2>Tech Wonders of Today and Tomorrow:</h2>
                    <ul style="line-height: 2; margin: 20px 0;">
                        <li><strong>How Computers Work:</strong> Understanding the basics of hardware and software</li>
                        <li><strong>Internet Magic:</strong> How information travels around the world instantly</li>
                        <li><strong>Robotics:</strong> Machines that can think and move like humans</li>
                        <li><strong>Green Technology:</strong> Solar panels, wind turbines, and eco-friendly innovations</li>
                        <li><strong>Medical Tech:</strong> How technology helps doctors save lives</li>
                        <li><strong>Future Inventions:</strong> Flying cars, smart cities, and space elevators</li>
                    </ul>
                    <p><strong>Try Coding:</strong> Start with simple block-based programming languages like Scratch!</p>
                `
            },
            arts: {
                title: "🎨 Arts & Creativity Explorer",
                content: `
                    <h2>Express Your Creative Side:</h2>
                    <ul style="line-height: 2; margin: 20px 0;">
                        <li><strong>Famous Artists:</strong> Learn about Da Vinci, Picasso, and Van Gogh</li>
                        <li><strong>Art Techniques:</strong> Painting, drawing, sculpting, and digital art</li>
                        <li><strong>Music History:</strong> From classical composers to modern musicians</li>
                        <li><strong>Theater & Drama:</strong> Acting, storytelling, and stage performance</li>
                        <li><strong>Photography:</strong> Capturing beautiful moments and telling stories with images</li>
                        <li><strong>Crafts & DIY:</strong> Making amazing things with your hands</li>
                    </ul>
                    <p><strong>Create Today:</strong> Draw your dream house or write a short story about your pet!</p>
                `
            },
            geography: {
                title: "🌍 Geography & World Explorer",
                content: `
                    <h2>Discover Our Amazing Planet:</h2>
                    <ul style="line-height: 2; margin: 20px 0;">
                        <li><strong>World Landmarks:</strong> Great Wall of China, Pyramids, Machu Picchu</li>
                        <li><strong>Natural Wonders:</strong> Grand Canyon, Great Barrier Reef, Mount Everest</li>
                        <li><strong>Countries & Capitals:</strong> Learn about different nations and their cultures</li>
                        <li><strong>Climate Zones:</strong> Deserts, rainforests, tundra, and temperate regions</li>
                        <li><strong>Map Skills:</strong> Reading coordinates, understanding scale and direction</li>
                        <li><strong>Environmental Issues:</strong> How we can protect our planet</li>
                    </ul>
                    <p><strong>Geography Game:</strong> Can you name all seven continents and five oceans?</p>
                `
            }
        };

        function openModal(topic) {
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modal-body');
            
            modalBody.innerHTML = `
                <h1>${modalContent[topic].title}</h1>
                ${modalContent[topic].content}
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            const factItems = document.querySelectorAll('.fact-item');
            
            factItems.forEach((item, index) => {
                item.style.animationDelay = `${0.6 + index * 0.1}s`;
                item.style.animation = 'fadeInUp 1s ease-out both';
            });
        });
    