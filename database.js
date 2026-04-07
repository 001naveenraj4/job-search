const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'careercue.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        
        // Create Jobs Table
        db.run(`CREATE TABLE IF NOT EXISTS jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            company TEXT NOT NULL,
            companyLogo TEXT,
            location TEXT NOT NULL,
            salary TEXT,
            type TEXT,
            category TEXT,
            postedAt TEXT
        )`, (err) => {
            if (err) console.error(err);
            else {
                // Seed jobs if empty
                db.get("SELECT COUNT(*) as count FROM jobs", (err, row) => {
                    if (row.count === 0) {
                        const jobs = [
                            ['Senior Software Engineer, Google Cloud', 'Google', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUAhr2MmFqxV73o0Zzf4vpTyl3SpsnaOGklVvA0OxbSCZMTMlJC7afp_9W7hvU4TOx7-kCgI-sKDZo_Bxx_Jt9o4JJDSBYzcEWkw4Kpdr1YFfGaXTgecdpREGSrszTSFe4QU0y0ST9eDBwD_P1Tqr6COIUvuAHSZ73c8UghxxF-iXO0A4BkxjOJ61PIMD72dUstMK5jHdFAxiPxCfsHfl8MH2nTmZ9r6YgdR_7va81lxtNmt5n01k1ViUCFKyHgcnI-mDucBrSa9s', 'Mountain View, CA', '$180k - $240k', 'Full Time', 'Private', '2 days ago'],
                            ['Civil Infrastructure Specialist', 'US Government', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqo-758nllXGYP-59AzuiBNsUryYkuJcQMxGrqX1MDVM6gFMWT1u9ib4xPnm7QugxTowbAI5CZaTYSf2qkl4t5CTNKB8EhWixDYJl1Rhvz5wmhS86Zm3gm5MafXxbfjwdCHSvQb7rxrZ3OFiiVvcHKSPH-z7O7HT89uDbaEpTZNsKeICjbdxvA9cLpKx6VOZ8eK5pyyguqfRgYfmTVOf1sB1cj06ESOQshIXFxp9c2ZH003d6qZeag3T_2hAbIkbowvCtvymvDBLA', 'Washington, D.C.', 'GS-13 Grade', 'Govt Job', 'Govt', '5 hours ago'],
                            ['Senior Product Designer', 'Stripe', 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9AVZD3-rybblFQdBsD1AZ0NTJTEWTpBxJcqdNRljR2l4T6NLIEA3SNrhq1Pf7--9O_BEHEm-aFm8KkmYDcGr56BHkwkKrn4N2LUKp-h2uHP0aUCWWhfrnu0jpbhwlCBWeaaXOMpoxtSuJsYJqFHS7XKByM8md6i9dVYKl9eB8CjR2ehHdHeMdt8jTn0nzhIp4vGf9bCyiqBp-VYupuzpV3b-IUjXW1K1FUIYnpzAIY06_QL7-KbaOYC1_zFr3Ba2_SohrWk_oIUM', 'Remote, Global', '$140k - $190k', 'Remote', 'Remote', '1 day ago']
                        ];
                        const insertQuery = `INSERT INTO jobs (title, company, companyLogo, location, salary, type, category, postedAt) VALUES (?,?,?,?,?,?,?,?)`;
                        jobs.forEach(job => db.run(insertQuery, job));
                    }
                });
            }
        });

        // Create Courses Table
        db.run(`CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            imageUrl TEXT,
            rating TEXT,
            reviews TEXT,
            price TEXT,
            badge TEXT
        )`, (err) => {
            if (err) console.error(err);
            else {
                db.get("SELECT COUNT(*) as count FROM courses", (err, row) => {
                    if (row.count === 0) {
                        const courses = [
                            ['HTML5 Mastery: Semantic Web', 'Build modern, accessible websites with the latest HTML5 standards and best practices.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnsjix1mYJ6UzuVvB656E26RQn8yqnPUOdLgZksbjdmeJB_U_qSUpKvnb8mb249vgjUtOl4Zja0SDPaZ0EW1Ag1Y4mMZyzZiS-Ih__PLJnCxKXm9_qcSsnrk-RP0v-wCLEc3tuslhby8iMGb1GUCRh2puwsRJV-gkOEQ96GqY2e6NXUfJva_FN3Vcbn64BZcIvYMxRXUlwcc1C3p8bl3oh3nuGzSBKhOBzpjdMrMmClodqwTyZWv_at5x5Km8sg0pllSW8M4nRro', '4.9', '2.4k', '$49.99', 'Bestseller'],
                            ['Advanced CSS3 Layouts', 'Master Grid, Flexbox, and complex animations to create stunning editorial experiences.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCArpjIl_1_CSLQl8h2BIZgHIC2EPmLecKJabuR1SG8ds4K8urr0YspX_4YETiTri4MiAZdod2T2xuZVhzJaO1GwHQ8BmHcPDtsD9Tl5FUsgYFjnWYx0MArz2uoh1bsnj7bfUjdcrClZiL2o7FKUDgB6arcvsMHr1zB1YEJn5K5fffexRyqo_pRNhAuUQiKudL2aidvl-Bq2D8cuO54XR6-YbSHSOrWel3uHzifTmKtb6HnH2SIovF3Cj46HwJRcLcpG_pNMUzsk-8', '4.8', '1.8k', '$59.99', 'Premium'],
                            ['Java Master Class 2024', 'A comprehensive deep-dive into enterprise-grade Java development and architecture.', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjeiO7HROO32DXQ6MF_Ma-PeqTanulcvZQjdV0Cs8KMLQ83PRF1VfoTHMIabzMI2eYY_4N7cHDKrHvI0DfkBO9WyL7DhUfIoVvdjdt6WzNyjXLkxHedMjfbXCeAxiOiy8lkAKV-pU_r5r37sCAvTzvMqThwpck6FfDGcdehn56aXunCn7XDZFZmAcA3P1hf6gVMBSq_dEIUSzrd22qYD8mDIJnJeiXp-3lpYWEc4COiL_PMYmoOzV0mLEnJuP4d1ZVjuj2wacW9Lg', '5.0', '920', '$89.99', 'Masterclass']
                        ];
                        const insertQuery = `INSERT INTO courses (title, description, imageUrl, rating, reviews, price, badge) VALUES (?,?,?,?,?,?,?)`;
                        courses.forEach(course => db.run(insertQuery, course));
                    }
                });
            }
        });

        // Create Newsletter Subscribers Table
        db.run(`CREATE TABLE IF NOT EXISTS newsletter_subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL
        )`);
    }
});

module.exports = db;
