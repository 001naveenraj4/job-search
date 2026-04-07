// Simulated Backend Data
const defaultJobs = [
    { id: 1, title: 'Senior Software Engineer, Google Cloud', company: 'Google', companyLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUAhr2MmFqxV73o0Zzf4vpTyl3SpsnaOGklVvA0OxbSCZMTMlJC7afp_9W7hvU4TOx7-kCgI-sKDZo_Bxx_Jt9o4JJDSBYzcEWkw4Kpdr1YFfGaXTgecdpREGSrszTSFe4QU0y0ST9eDBwD_P1Tqr6COIUvuAHSZ73c8UghxxF-iXO0A4BkxjOJ61PIMD72dUstMK5jHdFAxiPxCfsHfl8MH2nTmZ9r6YgdR_7va81lxtNmt5n01k1ViUCFKyHgcnI-mDucBrSa9s', location: 'Mountain View, CA', salary: '$180k - $240k', type: 'Full Time', postedAt: '2 days ago' },
    { id: 2, title: 'Civil Infrastructure Specialist', company: 'US Government', companyLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqo-758nllXGYP-59AzuiBNsUryYkuJcQMxGrqX1MDVM6gFMWT1u9ib4xPnm7QugxTowbAI5CZaTYSf2qkl4t5CTNKB8EhWixDYJl1Rhvz5wmhS86Zm3gm5MafXxbfjwdCHSvQb7rxrZ3OFiiVvcHKSPH-z7O7HT89uDbaEpTZNsKeICjbdxvA9cLpKx6VOZ8eK5pyyguqfRgYfmTVOf1sB1cj06ESOQshIXFxp9c2ZH003d6qZeag3T_2hAbIkbowvCtvymvDBLA', location: 'Washington, D.C.', salary: 'GS-13 Grade', type: 'Govt Job', postedAt: '5 hours ago' },
    { id: 3, title: 'Senior Product Designer', company: 'Stripe', companyLogo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9AVZD3-rybblFQdBsD1AZ0NTJTEWTpBxJcqdNRljR2l4T6NLIEA3SNrhq1Pf7--9O_BEHEm-aFm8KkmYDcGr56BHkwkKrn4N2LUKp-h2uHP0aUCWWhfrnu0jpbhwlCBWeaaXOMpoxtSuJsYJqFHS7XKByM8md6i9dVYKl9eB8CjR2ehHdHeMdt8jTn0nzhIp4vGf9bCyiqBp-VYupuzpV3b-IUjXW1K1FUIYnpzAIY06_QL7-KbaOYC1_zFr3Ba2_SohrWk_oIUM', location: 'Remote, Global', salary: '$140k - $190k', type: 'Remote', postedAt: '1 day ago' },
];

const defaultCourses = [
    { id: 1, title: 'HTML5 Mastery: Semantic Web', description: 'Build modern, accessible websites with the latest HTML5 standards.', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnsjix1mYJ6UzuVvB656E26RQn8yqnPUOdLgZksbjdmeJB_U_qSUpKvnb8mb249vgjUtOl4Zja0SDPaZ0EW1Ag1Y4mMZyzZiS-Ih__PLJnCxKXm9_qcSsnrk-RP0v-wCLEc3tuslhby8iMGb1GUCRh2puwsRJV-gkOEQ96GqY2e6NXUfJva_FN3Vcbn64BZcIvYMxRXUlwcc1C3p8bl3oh3nuGzSBKhOBzpjdMrMmClodqwTyZWv_at5x5Km8sg0pllSW8M4nRro', rating: '4.9', reviews: '2.4k', price: '$49.99', badge: 'Bestseller' },
    { id: 2, title: 'Advanced CSS3 Layouts', description: 'Master Grid, Flexbox, and complex animations to create stunning editorial experiences.', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCArpjIl_1_CSLQl8h2BIZgHIC2EPmLecKJabuR1SG8ds4K8urr0YspX_4YETiTri4MiAZdod2T2xuZVhzJaO1GwHQ8BmHcPDtsD9Tl5FUsgYFjnWYx0MArz2uoh1bsnj7bfUjdcrClZiL2o7FKUDgB6arcvsMHr1zB1YEJn5K5fffexRyqo_pRNhAuUQiKudL2aidvl-Bq2D8cuO54XR6-YbSHSOrWel3uHzifTmKtb6HnH2SIovF3Cj46HwJRcLcpG_pNMUzsk-8', rating: '4.8', reviews: '1.8k', price: '$59.99', badge: 'Premium' },
    { id: 3, title: 'Java Master Class 2024', description: 'A comprehensive deep-dive into enterprise-grade Java development and architecture.', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjeiO7HROO32DXQ6MF_Ma-PeqTanulcvZQjdV0Cs8KMLQ83PRF1VfoTHMIabzMI2eYY_4N7cHDKrHvI0DfkBO9WyL7DhUfIoVvdjdt6WzNyjXLkxHedMjfbXCeAxiOiy8lkAKV-pU_r5r37sCAvTzvMqThwpck6FfDGcdehn56aXunCn7XDZFZmAcA3P1hf6gVMBSq_dEIUSzrd22qYD8mDIJnJeiXp-3lpYWEc4COiL_PMYmoOzV0mLEnJuP4d1ZVjuj2wacW9Lg', rating: '5.0', reviews: '920', price: '$89.99', badge: 'Masterclass' }
];

const defaultArticles = [
    { title: 'Mastering the Art of Remote Leadership in 2024', category: 'Career Strategy', readTime: '8 min read', date: 'Dec 12, 2023', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUyG1BwKjpLN-BD5QYxwTHUQqrENi-Gr8_M1OtbU5zKeOxqh7zkd2rtzecWR_eSQeV5v2V2HwlYMVDMqIy33VIgtLSgtZShH4weFojVcRNAKePmUAS64ARLs75xz60jn_HZg-_yviaPJBxQVa6H6DDhQfbEdNMmooIw8D7QFhyiSVI_EOoenbejmvbxatv0oBc8PCCjcNBfuhXshPcwQGTLximLdOI0Gcl2mH5Y_za1e0cpNMMILDU9zSBtNvadFSBsOA4tTd8W74' },
    { title: 'Will AI Replace Entry-Level Coding Roles?', category: 'Tech Trends', readTime: '5 min read', date: 'Jan 05, 2024', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAljOKObz_B1GbHGoXT_9aXKnPIPZliC1LiueQOWlSbfDXPF6ZUzCEpzDzg9IFKHF49txnKIVlhXFtUgTbTqsgSBiSESNONjfxmUnAfCcAVPU2KjXW9ULOJJRkuHW13KSaoUp3SH3iQ1HbyxQerMFabtNx0y2ngJyDoOLIQLZu-HP9-gGuVk4PfpcL4hwHvyiGP2x40gagRFDxNaUg0-mGJIfV1lJfb153kABjxtElHFyd9ahUkZjANQFyrKXdRYArhbqi6r1ioXF4' },
    { title: 'Negotiating Your Salary: Secrets from Recruiters', category: 'Interview Prep', readTime: '6 min read', date: 'Feb 14, 2024', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu21iTg1djINKj3GfQLFlVSc7vzQN9uimwU0MunB5Fhb413cVaPPr6VKvokuZp-mwi404xeNVsh1eI_Xh1lY80N-DvrFDRXKW0v4yMcOj1_uJgjVKuy0dUSecqEd1I3KRrsLKvE0SKAiPb_gjjAuzAi33w0JXsoypF_Fvt0aKRxZnYtBMec7pVWhLNZBiCIf3VmDRNAujj2RxImtW_4guWj_cpdR9AqtCCAFzxYtuvqd-yrnd6rw0BjCl2Tb1xhft4sfOOcstHegA' }
];

const defaultMentors = [
    { name: 'Sarah Jenkins', role: 'Staff Engineer', company: 'Google', rating: '5.0', reviews: 124, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu21iTg1djINKj3GfQLFlVSc7vzQN9uimwU0MunB5Fhb413cVaPPr6VKvokuZp-mwi404xeNVsh1eI_Xh1lY80N-DvrFDRXKW0v4yMcOj1_uJgjVKuy0dUSecqEd1I3KRrsLKvE0SKAiPb_gjjAuzAi33w0JXsoypF_Fvt0aKRxZnYtBMec7pVWhLNZBiCIf3VmDRNAujj2RxImtW_4guWj_cpdR9AqtCCAFzxYtuvqd-yrnd6rw0BjCl2Tb1xhft4sfOOcstHegA' },
    { name: 'David Cho', role: 'Product Lead', company: 'Airbnb', rating: '4.9', reviews: 89, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAljOKObz_B1GbHGoXT_9aXKnPIPZliC1LiueQOWlSbfDXPF6ZUzCEpzDzg9IFKHF49txnKIVlhXFtUgTbTqsgSBiSESNONjfxmUnAfCcAVPU2KjXW9ULOJJRkuHW13KSaoUp3SH3iQ1HbyxQerMFabtNx0y2ngJyDoOLIQLZu-HP9-gGuVk4PfpcL4hwHvyiGP2x40gagRFDxNaUg0-mGJIfV1lJfb153kABjxtElHFyd9ahUkZjANQFyrKXdRYArhbqi6r1ioXF4' },
    { name: 'Elena Rodriguez', role: 'Data Science Dir', company: 'Spotify', rating: '4.8', reviews: 201, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu21iTg1djINKj3GfQLFlVSc7vzQN9uimwU0MunB5Fhb413cVaPPr6VKvokuZp-mwi404xeNVsh1eI_Xh1lY80N-DvrFDRXKW0v4yMcOj1_uJgjVKuy0dUSecqEd1I3KRrsLKvE0SKAiPb_gjjAuzAi33w0JXsoypF_Fvt0aKRxZnYtBMec7pVWhLNZBiCIf3VmDRNAujj2RxImtW_4guWj_cpdR9AqtCCAFzxYtuvqd-yrnd6rw0BjCl2Tb1xhft4sfOOcstHegA' },
    { name: 'Michael Chang', role: 'Senior UX Designer', company: 'Apple', rating: '5.0', reviews: 56, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAljOKObz_B1GbHGoXT_9aXKnPIPZliC1LiueQOWlSbfDXPF6ZUzCEpzDzg9IFKHF49txnKIVlhXFtUgTbTqsgSBiSESNONjfxmUnAfCcAVPU2KjXW9ULOJJRkuHW13KSaoUp3SH3iQ1HbyxQerMFabtNx0y2ngJyDoOLIQLZu-HP9-gGuVk4PfpcL4hwHvyiGP2x40gagRFDxNaUg0-mGJIfV1lJfb153kABjxtElHFyd9ahUkZjANQFyrKXdRYArhbqi6r1ioXF4' }
];

let cart = [];

function initData() {
    if (!localStorage.getItem('jobs')) localStorage.setItem('jobs', JSON.stringify(defaultJobs));
    if (!localStorage.getItem('courses')) localStorage.setItem('courses', JSON.stringify(defaultCourses));
    if (!localStorage.getItem('articles')) localStorage.setItem('articles', JSON.stringify(defaultArticles));
    if (!localStorage.getItem('mentors')) localStorage.setItem('mentors', JSON.stringify(defaultMentors));
    if (!localStorage.getItem('cart')) localStorage.setItem('cart', JSON.stringify([]));
    cart = JSON.parse(localStorage.getItem('cart'));
    injectModals();
}

function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `p-4 rounded-xl shadow-lg border-l-4 mb-3 flex items-center gap-3 transform transition-all duration-300 translate-x-0 ${type === 'success' ? 'bg-white border-primary text-slate-800' : 'bg-red-50 border-red-500 text-red-800'}`;
    toast.innerHTML = `<span class="material-symbols-outlined ${type === 'success' ? 'text-primary' : 'text-red-500'}">${type === 'success' ? 'check_circle' : 'error'}</span><p class="font-medium text-sm flex-1">${message}</p>`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function fetchJobs(q = '', loc = '', filterType = '') {
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    const container = document.getElementById('jobs-container');
    container.innerHTML = '';
    
    const filteredJobs = jobs.filter(job => {
        const matchesQ = q ? (job.title.toLowerCase().includes(q.toLowerCase()) || job.company.toLowerCase().includes(q.toLowerCase())) : true;
        const matchesLoc = loc ? job.location.toLowerCase().includes(loc.toLowerCase()) : true;
        const matchesType = filterType ? job.type.toLowerCase().includes(filterType.toLowerCase()) : true;
        return matchesQ && matchesLoc && matchesType;
    });

    if (filteredJobs.length === 0) {
        container.innerHTML = '<p class="text-on-surface-variant text-center my-8 col-span-full">No jobs found matching your criteria.</p>';
        return;
    }

    filteredJobs.forEach(job => {
        const typeBadgeCol = job.type.toLowerCase().includes('govt') ? 'bg-primary-container/10 text-primary' : job.type.toLowerCase().includes('remote') ? 'bg-secondary-container/10 text-secondary' : 'bg-tertiary-container/10 text-tertiary';
        const elem = document.createElement('div');
        elem.className = 'bg-surface-container-lowest p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10';
        elem.innerHTML = `
            <div class="flex items-center gap-6">
                <div class="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center p-3">
                    <img alt="${job.company}" class="w-full h-full object-contain" src="${job.companyLogo || 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9AVZD3-rybblFQdBsD1AZ0NTJTEWTpBxJcqdNRljR2l4T6NLIEA3SNrhq1Pf7--9O_BEHEm-aFm8KkmYDcGr56BHkwkKrn4N2LUKp-h2uHP0aUCWWhfrnu0jpbhwlCBWeaaXOMpoxtSuJsYJqFHS7XKByM8md6i9dVYKl9eB8CjR2ehHdHeMdt8jTn0nzhIp4vGf9bCyiqBp-VYupuzpV3b-IUjXW1K1FUIYnpzAIY06_QL7-KbaOYC1_zFr3Ba2_SohrWk_oIUM'}" />
                </div>
                <div>
                    <h4 class="text-lg font-bold group-hover:text-primary transition-colors">${job.title}</h4>
                    <div class="flex flex-wrap gap-4 mt-2">
                        <span class="flex items-center gap-1 text-sm text-on-surface-variant"><span class="material-symbols-outlined text-sm">location_on</span> ${job.location}</span>
                        <span class="flex items-center gap-1 text-sm text-on-surface-variant"><span class="material-symbols-outlined text-sm">payments</span> ${job.salary || 'Competitive'}</span>
                        <span class="flex items-center gap-1 text-sm text-on-surface-variant"><span class="material-symbols-outlined text-sm">schedule</span> ${job.postedAt}</span>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <span class="${typeBadgeCol} font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">${job.type}</span>
                <button onclick="applyJob('${job.id}', '${job.title}')" class="border border-primary text-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-primary hover:text-on-primary transition-all">Apply Now</button>
            </div>
        `;
        container.appendChild(elem);
    });
}

function fetchCourses(q = '') {
    const courses = JSON.parse(localStorage.getItem('courses'));
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    
    const filtered = courses.filter(course => q ? course.title.toLowerCase().includes(q.toLowerCase()) || course.description.toLowerCase().includes(q.toLowerCase()) : true);
    if (filtered.length === 0) {
        container.innerHTML = '<p class="text-on-surface-variant text-center my-8 col-span-full">No courses found matching your criteria.</p>';
        return;
    }

    filtered.forEach(course => {
        const badgeCol = course.badge.toLowerCase().includes('premium') ? 'bg-tertiary-container text-on-tertiary-container' : course.badge.toLowerCase().includes('masterclass') ? 'bg-secondary-container text-on-secondary-container' : 'bg-primary text-on-primary';
        const elem = document.createElement('div');
        elem.className = 'group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col';
        elem.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${course.imageUrl}" />
                <div class="absolute top-4 left-4 ${badgeCol} text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">${course.badge}</div>
            </div>
            <div class="p-8 flex-1 flex flex-col">
                <div class="flex items-center gap-2 mb-4">
                    <span class="material-symbols-outlined text-tertiary text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                    <span class="text-sm font-semibold">${course.rating} (${course.reviews} reviews)</span>
                </div>
                <h3 class="text-xl font-bold font-headline mb-2">${course.title}</h3>
                <p class="text-sm text-on-surface-variant mb-6 flex-1">${course.description}</p>
                <div class="flex items-center justify-between pt-6 border-t border-surface-container">
                    <span class="text-2xl font-bold text-on-surface">${course.price}</span>
                    <div class="flex gap-2">
                        <button onclick="addToCart(${course.id}, '${course.title}', '${course.price}')" class="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
                            <span class="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
                        </button>
                        <button onclick="addToCart(${course.id}, '${course.title}', '${course.price}'); openModal('cart-modal'); renderCart();" class="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm hover:bg-primary-dim transition-all">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(elem);
    });
}

function fetchArticles(q = '') {
    const articles = JSON.parse(localStorage.getItem('articles'));
    const container = document.getElementById('articles-container');
    container.innerHTML = '';
    
    const filtered = articles.filter(a => q ? a.title.toLowerCase().includes(q.toLowerCase()) || a.category.toLowerCase().includes(q.toLowerCase()) : true);
    if (filtered.length === 0) {
        document.getElementById('articles-container').parentElement.style.display = 'none'; // hide if empty search result to look cleaner
        return;
    }
    document.getElementById('articles-container').parentElement.style.display = 'block';

    filtered.forEach(article => {
        const elem = document.createElement('div');
        elem.className = 'group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer';
        elem.onclick = () => {
            document.getElementById('article-title-display').innerText = article.title;
            openModal('article-modal');
        };
        elem.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${article.imageUrl}" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                    <span class="bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">${article.category}</span>
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <h3 class="text-xl font-bold font-headline mb-4 group-hover:text-primary transition-colors">${article.title}</h3>
                <div class="flex items-center justify-between text-sm text-on-surface-variant mt-auto border-t border-surface-container pt-4">
                    <span>${article.readTime}</span>
                    <span>${article.date}</span>
                </div>
            </div>
        `;
        container.appendChild(elem);
    });
}

function fetchMentors(q = '') {
    const mentors = JSON.parse(localStorage.getItem('mentors'));
    const section = document.getElementById('mentors-section');
    const container = document.getElementById('mentors-container');
    if(!container) return;
    container.innerHTML = '';
    
    const filtered = mentors.filter(m => q ? m.name.toLowerCase().includes(q.toLowerCase()) || m.role.toLowerCase().includes(q.toLowerCase()) || m.company.toLowerCase().includes(q.toLowerCase()) : true);
    if (filtered.length === 0) {
        section.style.display = 'none'; // hide if empty search result 
        return;
    }
    section.style.display = 'block';

    filtered.forEach(mentor => {
        const elem = document.createElement('div');
        elem.className = 'bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-transparent hover:border-primary/20 hover:shadow-xl transition-all text-center';
        elem.innerHTML = `
            <div class="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-surface-container">
                <img class="w-full h-full object-cover" src="${mentor.imageUrl}" alt="${mentor.name}" />
            </div>
            <h4 class="font-bold text-lg mb-1">${mentor.name}</h4>
            <p class="text-primary text-sm font-medium mb-1">${mentor.role} @ ${mentor.company}</p>
            <div class="flex items-center justify-center gap-1 text-sm text-on-surface-variant mb-6">
                <span class="material-symbols-outlined text-tertiary text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="font-bold">${mentor.rating}</span>
                <span>(${mentor.reviews})</span>
            </div>
            <button onclick="showToast('Session requesting feature coming soon!')" class="w-full border-2 border-primary text-primary hover:bg-primary hover:text-on-primary transition font-bold py-2 rounded-xl text-sm">Book Session</button>
        `;
        container.appendChild(elem);
    });
}

function renderCart() {
    const list = document.getElementById('cart-items');
    list.innerHTML = '';
    if (cart.length === 0) list.innerHTML = '<p class="text-sm text-slate-500">Your cart is empty.</p>';
    cart.forEach((c, idx) => {
        list.innerHTML += `<div class="flex justify-between items-center py-2 border-b">
            <div><p class="font-bold text-sm text-slate-800">${c.title}</p><p class="text-primary text-xs">${c.price}</p></div>
            <button onclick="removeFromCart(${idx})" class="text-red-500 hover:text-red-700 text-xs font-bold">Remove</button>
        </div>`;
    });
    document.getElementById('cart-count').innerText = cart.length;
}

function addToCart(id, title, price) {
    cart.push({id, title, price});
    localStorage.setItem('cart', JSON.stringify(cart));
    showToast(`${title} added to cart!`);
    renderCart();
}

function removeFromCart(idx) {
    cart.splice(idx, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Set up UI events
document.addEventListener('DOMContentLoaded', () => {
    initData();
    fetchJobs();
    fetchCourses();
    fetchArticles();
    fetchMentors();
    renderCart();

    // Nav Scroll
    ['Jobs', 'Courses', 'Articles', 'Mentors'].forEach(sec => {
        const els = document.querySelectorAll(`a[href="#"]`);
        els.forEach(el => {
            if(el.innerText === sec) {
                el.onclick = (e) => {
                    e.preventDefault();
                    if(sec==='Jobs') document.getElementById('jobs-container')?.scrollIntoView({behavior: 'smooth'});
                    if(sec==='Courses') document.getElementById('courses-container')?.scrollIntoView({behavior: 'smooth'});
                    if(sec==='Articles') document.getElementById('articles-container')?.scrollIntoView({behavior: 'smooth'});
                    if(sec==='Mentors') document.getElementById('mentors-container')?.scrollIntoView({behavior: 'smooth'});
                }
            }
        });
    });

    // Global Search Bar
    if(document.getElementById('global-search')) {
        document.getElementById('global-search').addEventListener('input', (e) => {
            const q = e.target.value;
            fetchJobs(q);
            fetchCourses(q);
            fetchArticles(q);
            fetchMentors(q);
        });
    }

    // Buttons
    if(document.getElementById('btn-signin')) document.getElementById('btn-signin').onclick = () => openModal('signin-modal');
    if(document.getElementById('btn-post-job')) document.getElementById('btn-post-job').onclick = () => openModal('postjob-modal');
    
    // Category Filters
    const filterBtns = document.querySelectorAll('.bg-surface-container button');
    filterBtns.forEach(b => {
        if(b.closest('.bg-surface-container').querySelectorAll('button').length < 3) return; // avoid matching course buttons
        b.onclick = () => {
            filterBtns.forEach(btn => {btn.classList.remove('bg-primary', 'text-on-primary'); btn.classList.add('text-on-surface-variant');});
            b.classList.add('bg-primary', 'text-on-primary');
            b.classList.remove('text-on-surface-variant');
            const cat = b.innerText === 'All Opportunities' ? '' : b.innerText;
            fetchJobs('', '', cat);
        };
    });

    // Hero Tags
    document.querySelectorAll('.hero-gradient a.underline').forEach(a => {
        a.onclick = (e) => {
            e.preventDefault();
            document.getElementById('search-job-title').value = a.innerText;
            document.getElementById('global-search').value = a.innerText;
            document.getElementById('jobs-container').scrollIntoView({behavior: 'smooth'});
            fetchJobs(a.innerText);
            fetchCourses(a.innerText);
            fetchArticles(a.innerText);
            fetchMentors(a.innerText);
        };
    });

    // Search Job Hero
    if(document.getElementById('search-job-btn')) {
        document.getElementById('search-job-btn').addEventListener('click', () => {
            const q = document.getElementById('search-job-title').value;
            const loc = document.getElementById('search-job-location').value;
            document.getElementById('jobs-container').scrollIntoView({behavior: 'smooth'});
            fetchJobs(q, loc);
        });
    }

    // Newsletter
    if(document.getElementById('newsletter-btn')) {
        document.getElementById('newsletter-btn').addEventListener('click', () => {
            const email = document.getElementById('newsletter-email').value;
            if(email) {
                let subs = JSON.parse(localStorage.getItem('news') || '[]');
                if(subs.includes(email)) {
                    showToast('Email already subscribed!', 'error');
                } else {
                    subs.push(email);
                    localStorage.setItem('news', JSON.stringify(subs));
                    showToast('Successfully subscribed to newsletter!');
                    document.getElementById('newsletter-email').value = '';
                }
            } else showToast('Please enter an email.', 'error');
        });
    }
});

window.applyJob = (id, title) => {
    document.getElementById('apply-job-title').innerText = `Apply for: ${title}`;
    openModal('apply-modal');
}

window.submitJobPost = (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const company = document.getElementById('post-company').value;
    const loc = document.getElementById('post-loc').value;
    const type = document.getElementById('post-type').value;
    
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    jobs.unshift({
        id: Date.now(), title, company, location: loc, type, postedAt: 'Just now', salary: 'Depends on Exp.', companyLogo: ''
    });
    localStorage.setItem('jobs', JSON.stringify(jobs));
    showToast('Job Published Successfully!');
    closeModal('postjob-modal');
    fetchJobs();
    e.target.reset();
};

window.submitApp = (e) => {
    e.preventDefault();
    showToast('Application submitted successfully!');
    closeModal('apply-modal');
    e.target.reset();
}

window.submitLogin = (e) => {
    e.preventDefault();
    showToast('Successfully signed in!');
    closeModal('signin-modal');
    document.getElementById('btn-signin').innerText = 'My Dashboard';
    e.target.reset();
}

function injectModals() {
    if(document.getElementById('toast-container')) return;
    const d = document.createElement('div');
    d.innerHTML = `
    <!-- Top Right Toasts -->
    <div id="toast-container" class="fixed top-24 right-8 z-[100] w-80 pointer-events-none"></div>
    
    <!-- Sign In Modal -->
    <div id="signin-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity">
        <div class="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl p-8 shadow-2xl transform transition-all relative">
            <button onclick="closeModal('signin-modal')" class="absolute top-4 right-4 text-slate-400 hover:text-slate-800"><span class="material-symbols-outlined">close</span></button>
            <h3 class="text-2xl font-bold font-headline mb-6 text-slate-800">Welcome Back</h3>
            <form onsubmit="submitLogin(event)" class="space-y-4">
                <input required type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none" />
                <input required type="password" placeholder="Password" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary outline-none" />
                <button class="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dim transition">Sign In</button>
            </form>
        </div>
    </div>

    <!-- Post Job Modal -->
    <div id="postjob-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity">
        <div class="bg-white w-full max-w-xl rounded-2xl p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button onclick="closeModal('postjob-modal')" class="absolute top-4 right-4 text-slate-400 hover:text-slate-800"><span class="material-symbols-outlined">close</span></button>
            <h3 class="text-2xl font-bold font-headline mb-6 text-slate-800">Post a New Job</h3>
            <form onsubmit="submitJobPost(event)" class="space-y-4">
                <div><label class="text-sm font-bold opacity-70">Job Title</label><input required id="post-title" type="text" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary" /></div>
                <div><label class="text-sm font-bold opacity-70">Company Name</label><input required id="post-company" type="text" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary" /></div>
                <div><label class="text-sm font-bold opacity-70">Location</label><input required id="post-loc" type="text" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary" /></div>
                <div><label class="text-sm font-bold opacity-70">Job Type</label>
                    <select id="post-type" class="w-full px-4 py-3 rounded-lg border">
                        <option>Full Time</option><option>Remote</option><option>Govt Job</option><option>Contract</option>
                    </select>
                </div>
                <button class="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dim transition mt-4">Publish Job</button>
            </form>
        </div>
    </div>

    <!-- Apply Job Modal -->
    <div id="apply-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity">
        <div class="bg-white w-full max-w-xl rounded-2xl p-8 shadow-2xl relative">
            <button onclick="closeModal('apply-modal')" class="absolute top-4 right-4 text-slate-400 hover:text-slate-800"><span class="material-symbols-outlined">close</span></button>
            <h3 id="apply-job-title" class="text-xl font-bold font-headline mb-6 text-slate-800">Apply</h3>
            <form onsubmit="submitApp(event)" class="space-y-4">
                <input required type="text" placeholder="Full Name" class="w-full px-4 py-3 rounded-lg border" />
                <input required type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-lg border" />
                <textarea required placeholder="Cover Letter" class="w-full px-4 py-3 rounded-lg border h-32"></textarea>
                <div class="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center text-slate-500 cursor-pointer hover:bg-slate-50">Click to upload Resume (PDF)</div>
                <button class="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dim transition">Submit Application</button>
            </form>
        </div>
    </div>

    <!-- Article Modal -->
    <div id="article-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity">
        <div class="bg-white w-full max-w-3xl rounded-2xl p-8 shadow-2xl relative h-[80vh] overflow-y-auto">
            <button onclick="closeModal('article-modal')" class="absolute top-4 right-4 text-slate-400 hover:text-slate-800"><span class="material-symbols-outlined">close</span></button>
            <h2 id="article-title-display" class="text-3xl font-bold font-headline mb-4 text-slate-800 mt-4 leading-tight">Article Title</h2>
            <div class="flex gap-4 text-sm text-slate-500 mb-8 border-b pb-4"><span>By CareerCue Editorial</span><span>•</span><span>Jan 2024</span></div>
            <div class="space-y-6 text-slate-700 leading-relaxed text-lg">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar id nunc ac vestibulum. Nulla eu scelerisque lorem. Sed ut pulvinar enim.</p>
                <p>Curabitur euismod mi vitae ante commodo, in fermentum turpis malesuada. Nam aliquet vehicula leo, sit amet faucibus nibh bibendum at.</p>
                <div class="bg-surface p-6 rounded-xl border-l-4 border-primary italic">"The future belongs to those who learn more skills and combine them in creative ways."</div>
                <p>Donec consequat nisl eu nibh dictum, vitae vehicula mi semper. Morbi pellentesque metus vitae erat ullamcorper volutpat.</p>
            </div>
            <button onclick="closeModal('article-modal')" class="mt-8 bg-slate-100 text-slate-800 font-bold py-3 px-6 rounded-lg hover:bg-slate-200 w-full">Close Article</button>
        </div>
    </div>

    <!-- Cart Modal / Floating Cart -->
    <div id="cart-modal" class="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm flex justify-end">
        <div class="bg-white w-full max-w-md h-full p-8 shadow-2xl flex flex-col relative animate-[slideLeft_0.3s_ease-out]">
            <button onclick="closeModal('cart-modal')" class="absolute top-4 right-6 text-slate-400 hover:text-slate-800"><span class="material-symbols-outlined">close</span></button>
            <h3 class="text-2xl font-bold font-headline mb-6 text-slate-800">Your Cart</h3>
            <div id="cart-items" class="flex-1 overflow-y-auto pr-2 space-y-2"></div>
            <div class="pt-6 border-t mt-4">
                <button onclick="if(cart.length>0) { showToast('Secure checkout initiated!'); cart=[]; localStorage.setItem('cart','[]'); renderCart(); closeModal('cart-modal'); }" class="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dim transition shadow-lg shadow-primary/30">Checkout</button>
            </div>
        </div>
    </div>

    <!-- Floating Cart Button -->
    <button onclick="openModal('cart-modal')" class="fixed bottom-8 right-8 z-40 bg-surface-container-lowest shadow-xl rounded-full p-4 hover:scale-110 transition flex items-center justify-center group border border-outline-variant/20">
        <span class="material-symbols-outlined text-primary">shopping_bag</span>
        <span id="cart-count" class="absolute -top-2 -right-2 bg-error text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">0</span>
    </button>
    `;
    document.body.appendChild(d);
}
