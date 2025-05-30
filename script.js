// Sample data - in a real app, this would come from an API or database
const sampleData = [
    {
        refNo: "A.G.L 01",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "Hashini",
        phoneNo: "742740587",
        area: "ඉංගිරිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 02",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "Ranamali",
        phoneNo: "714553988",
        area: "ඉංගිරිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 03",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "K.Siriyalatha",
        phoneNo: "725246227",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 04",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "I.M Perera",
        phoneNo: "77931884",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 05",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "Thisara",
        phoneNo: "770314660",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 06",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "Jiwaka",
        phoneNo: "778069440",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 07",
        sample: "කුඩය - 01",
        newExamples: "",
        name: "Chaminda",
        phoneNo: "779763016",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 08",
        sample: "කුඩය - 01/Haji Set",
        newExamples: "",
        name: "Piyanka",
        phoneNo: "714544858",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 09",
        sample: "කුඩය /J.B.L/ෆැසිපික් පුටු",
        newExamples: "",
        name: "M.A Karunawantha",
        phoneNo: "716956786",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 10",
        sample: "ෆැසිපික් පුටු /Haji Bedshit",
        newExamples: "",
        name: "Sadun",
        phoneNo: "717363989",
        area: "වෙලකම්ගොඩ්",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 11",
        sample: "කුඩය - 01",
        newExamples: "",
        name: "Amarathunga",
        phoneNo: "77768573",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 12",
        sample: "කුඩය /Haji Bedshit",
        newExamples: "",
        name: "Rajitha",
        phoneNo: "777268573",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 13",
        sample: "කුඩය /J.B.L",
        newExamples: "",
        name: "Aananda",
        phoneNo: "762474786",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 14",
        sample: "කුඩය /ෆැසිපික් පුටු /Haji Bedshit",
        newExamples: "",
        name: "H.M Malika",
        phoneNo: "767329602",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 15",
        sample: "කුඩය /JBL",
        newExamples: "",
        name: "Chamara",
        phoneNo: "716153118",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 16",
        sample: "කුඩය",
        newExamples: "",
        name: "Shanuka",
        phoneNo: "771511709",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 17",
        sample: "කුඩය /Haji Bedshit",
        newExamples: "",
        name: "Champa",
        phoneNo: "716153118",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 18",
        sample: "කුඩය",
        newExamples: "",
        name: "Nandana",
        phoneNo: "718964756",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 19",
        sample: "කුඩය /Haji Bedshit",
        newExamples: "",
        name: "Kamala",
        phoneNo: "762124350",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 20",
        sample: "කුඩය",
        newExamples: "",
        name: "Wasanatha",
        phoneNo: "",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 21",
        sample: "ෆැසිපික් පුටු /කුඩය /Courburd/පිගන් සෙට්",
        newExamples: "",
        name: "Disaru",
        phoneNo: "716070365",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 22",
        sample: "",
        newExamples: "",
        name: "Sadun",
        phoneNo: "717076056",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 23",
        sample: "",
        newExamples: "",
        name: "P.Jayanthi",
        phoneNo: "711996313",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 24",
        sample: "",
        newExamples: "",
        name: "K.M Mangalika",
        phoneNo: "703484520",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 25",
        sample: "",
        newExamples: "",
        name: "D.F Pradhip",
        phoneNo: "705142952",
        area: "තිබෝට්ටව",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 26",
        sample: "",
        newExamples: "",
        name: "Sanjiwani",
        phoneNo: "779078871",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 27",
        sample: "",
        newExamples: "",
        name: "Sanja",
        phoneNo: "778576217",
        area: "ගල්කැටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 28",
        sample: "",
        newExamples: "",
        name: "Indunani",
        phoneNo: "774970324",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 29",
        sample: "",
        newExamples: "",
        name: "W.P Renuka",
        phoneNo: "771579900",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 30",
        sample: "",
        newExamples: "",
        name: "Mahndidum",
        phoneNo: "770768487",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 31",
        sample: "",
        newExamples: "",
        name: "Ruwan",
        phoneNo: "710525852",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 32",
        sample: "",
        newExamples: "",
        name: "Minithila",
        phoneNo: "710444678",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 33",
        sample: "",
        newExamples: "",
        name: "Ranjani",
        phoneNo: "773668257",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 34",
        sample: "",
        newExamples: "",
        name: "K.K Kulasekara",
        phoneNo: "770231180",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 35",
        sample: "",
        newExamples: "",
        name: "Dayangani",
        phoneNo: "778078283",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 36",
        sample: "",
        newExamples: "",
        name: "Lalitha",
        phoneNo: "742238814",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 37",
        sample: "",
        newExamples: "",
        name: "K.A Sadun",
        phoneNo: "744627675",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 38",
        sample: "",
        newExamples: "",
        name: "Kadnarachi",
        phoneNo: "715615316",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 39",
        sample: "",
        newExamples: "",
        name: "D.L.J Renuka",
        phoneNo: "773434531",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 40",
        sample: "",
        newExamples: "",
        name: "Dayani",
        phoneNo: "704194646",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 41",
        sample: "",
        newExamples: "",
        name: "Maitripala",
        phoneNo: "716955128",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 42",
        sample: "",
        newExamples: "",
        name: "H. Anoma",
        phoneNo: "710140774",
        area: "දෙල්මැල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 43",
        sample: "",
        newExamples: "",
        name: "Hansa",
        phoneNo: "767753899",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 44",
        sample: "",
        newExamples: "",
        name: "S.D Dipika",
        phoneNo: "703270874",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 45",
        sample: "",
        newExamples: "",
        name: "Nandi",
        phoneNo: "762102330",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 46",
        sample: "",
        newExamples: "",
        name: "Pasara",
        phoneNo: "782559765",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 47",
        sample: "",
        newExamples: "",
        name: "Mahodu",
        phoneNo: "342249737",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 48",
        sample: "",
        newExamples: "",
        name: "Nilanthi",
        phoneNo: "779807957",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 49",
        sample: "",
        newExamples: "",
        name: "A.M.G Uduwela",
        phoneNo: "766245098",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 50",
        sample: "",
        newExamples: "",
        name: "Kanthi",
        phoneNo: "766209976",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 51",
        sample: "",
        newExamples: "",
        name: "Somalatha",
        phoneNo: "0342243457",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 52",
        sample: "",
        newExamples: "",
        name: "K.A Ranjini",
        phoneNo: "724781733",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 53",
        sample: "",
        newExamples: "",
        name: "Gayani",
        phoneNo: "718583033",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 54",
        sample: "",
        newExamples: "",
        name: "Ganika",
        phoneNo: "764403853",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 55",
        sample: "",
        newExamples: "",
        name: "Damaiyanthi",
        phoneNo: "760164701",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 56",
        sample: "",
        newExamples: "",
        name: "Mangalika",
        phoneNo: "786479008",
        area: "වැලිපැන්න",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 57",
        sample: "",
        newExamples: "",
        name: "P.A Mangalika",
        phoneNo: "741976514",
        area: "වැලිපැන්න",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 58",
        sample: "",
        newExamples: "",
        name: "Aaruni",
        phoneNo: "787324650",
        area: "වැලිපැන්න",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 59",
        sample: "",
        newExamples: "",
        name: "Wasantha",
        phoneNo: "752361141",
        area: "වැලිපැන්න",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 60",
        sample: "",
        newExamples: "",
        name: "Budika",
        phoneNo: "711949548",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 61",
        sample: "",
        newExamples: "",
        name: "Dipika",
        phoneNo: "711947770",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#dataTable tbody');
    const addBtn = document.getElementById('addBtn');
    const newProductBtn = document.getElementById('newProductBtn');
    const searchInput = document.getElementById('searchInput');
    
    // Modal elements
    const entryModal = document.getElementById('entryModal');
    const productModal = document.getElementById('productModal');
    const closeBtns = document.querySelectorAll('.close, .close-product');
    const cancelEntryBtn = document.getElementById('cancelEntry');
    const cancelProductBtn = document.getElementById('cancelProduct');
    const entryForm = document.getElementById('entryForm');
    const productForm = document.getElementById('productForm');
    
    // Current item being edited
    let currentItem = null;
    
    // Initialize the table
    function initTable() {
        renderTable(sampleData);
    }
    
    // Render table with data
    function renderTable(data) {
        tableBody.innerHTML = '';
        
        if (data.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="10" class="no-data">No orders found</td>`;
            tableBody.appendChild(row);
            return;
        }
        
        data.forEach(item => {
            const row = document.createElement('tr');
            
            // Determine status class
            let statusClass = '';
            if (item.status.includes('CONFIRMED')) statusClass = 'status-confirmed';
            else if (item.status.includes('GETTING READY')) statusClass = 'status-getting-ready';
            else if (item.status.includes('TO RETURN')) statusClass = 'status-to-return';
            else if (item.status.includes('INACTIVE')) statusClass = 'status-inactive';
            
            row.innerHTML = `
                <td>${item.refNo}</td>
                <td>${item.sample}</td>
                <td>${item.newExamples}</td>
                <td>${item.name}</td>
                <td>${item.phoneNo}</td>
                <td>${item.area}</td>
                <td><span class="status-badge ${statusClass}">${item.status}</span></td>
                <td>${item.action}</td>
                <td>${item.notes}</td>
                <td class="action-buttons">
                    <button class="action-btn edit" data-id="${item.refNo}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" data-id="${item.refNo}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
        
        // Add event listeners to action buttons
        document.querySelectorAll('.action-btn.edit').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const refNo = e.currentTarget.getAttribute('data-id');
                editEntry(refNo);
            });
        });
        
        document.querySelectorAll('.action-btn.delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const refNo = e.currentTarget.getAttribute('data-id');
                deleteEntry(refNo);
            });
        });
    }
    
    // Open modal to add new entry
    function openAddModal() {
        currentItem = null;
        entryForm.reset();
        document.getElementById('status').value = 'CONFIRMED';
        document.getElementById('action').value = 'ACTIVE';
        entryModal.style.display = 'block';
    }
    
    // Open modal to edit existing entry
    function editEntry(refNo) {
        currentItem = sampleData.find(item => item.refNo === refNo);
        if (!currentItem) return;
        
        // Populate form fields
        document.getElementById('refNo').value = currentItem.refNo;
        document.getElementById('sample').value = currentItem.sample;
        document.getElementById('newExamples').value = currentItem.newExamples;
        document.getElementById('name').value = currentItem.name;
        document.getElementById('phoneNo').value = currentItem.phoneNo;
        document.getElementById('area').value = currentItem.area;
        document.getElementById('status').value = currentItem.status;
        document.getElementById('action').value = currentItem.action;
        document.getElementById('notes').value = currentItem.notes;
        
        entryModal.style.display = 'block';
    }
    
    // Delete an entry
    function deleteEntry(refNo) {
        if (confirm('Are you sure you want to delete this entry?')) {
            const index = sampleData.findIndex(item => item.refNo === refNo);
            if (index !== -1) {
                sampleData.splice(index, 1);
                renderTable(sampleData);
                showToast('Entry deleted successfully');
            }
        }
    }
    
    // Handle entry form submission
    entryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            refNo: document.getElementById('refNo').value,
            sample: document.getElementById('sample').value,
            newExamples: document.getElementById('newExamples').value,
            name: document.getElementById('name').value,
            phoneNo: document.getElementById('phoneNo').value,
            area: document.getElementById('area').value,
            status: document.getElementById('status').value,
            action: document.getElementById('action').value,
            notes: document.getElementById('notes').value
        };
        
        // Validate required fields
        if (!formData.refNo || !formData.name || !formData.phoneNo) {
            showToast('Please fill in all required fields', true);
            return;
        }
        
        if (currentItem) {
            // Update existing item
            Object.assign(currentItem, formData);
            showToast('Entry updated successfully');
        } else {
            // Add new item
            sampleData.unshift(formData);
            showToast('New entry added successfully');
        }
        
        renderTable(sampleData);
        entryModal.style.display = 'none';
    });
    
    // Open product modal
    newProductBtn.addEventListener('click', function() {
        productForm.reset();
        productModal.style.display = 'block';
    });
    
    // Handle product form submission
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const productData = {
            productRef: document.getElementById('productRef').value,
            productName: document.getElementById('productName').value,
            productDescription: document.getElementById('productDescription').value,
            productPrice: document.getElementById('productPrice').value,
            productCategory: document.getElementById('productCategory').value
        };
        
        // Validate required fields
        if (!productData.productRef || !productData.productName) {
            showToast('Please fill in all required fields', true);
            return;
        }
        
        // In a real app, you would save the product to your database here
        console.log('New product:', productData);
        showToast('Product created successfully');
        productModal.style.display = 'none';
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredData = sampleData.filter(item => 
            Object.values(item).some(val => 
                String(val).toLowerCase().includes(searchTerm)
            )
        );
        renderTable(filteredData);
    });
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            entryModal.style.display = 'none';
            productModal.style.display = 'none';
        });
    });
    
    if (cancelEntryBtn) {
        cancelEntryBtn.addEventListener('click', function() {
            entryModal.style.display = 'none';
        });
    }
    
    if (cancelProductBtn) {
        cancelProductBtn.addEventListener('click', function() {
            productModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === entryModal) {
            entryModal.style.display = 'none';
        }
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });
    
    // Show toast notification
    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isError ? 'error' : ''}`;
        toast.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
    
    // Initialize the app
    addBtn.addEventListener('click', openAddModal);
    initTable();
});




// Sample initial data - will only be used first time
const initialData = [
    {
        refNo: "A.G.L 01",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "Hashini",
        phoneNo: "742740587",
        area: "ඉංගිරිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 02",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "Ranamali",
        phoneNo: "714553988",
        area: "ඉංගිරිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 03",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "K.Siriyalatha",
        phoneNo: "725246227",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 04",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "I.M Perera",
        phoneNo: "77931884",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 05",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "Thisara",
        phoneNo: "770314660",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 06",
        sample: "කුඩ සාම්පල්",
        newExamples: "",
        name: "Jiwaka",
        phoneNo: "778069440",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 07",
        sample: "කුඩය - 01",
        newExamples: "",
        name: "Chaminda",
        phoneNo: "779763016",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 08",
        sample: "කුඩය - 01/Haji Set",
        newExamples: "",
        name: "Piyanka",
        phoneNo: "714544858",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 09",
        sample: "කුඩය /J.B.L/ෆැසිපික් පුටු",
        newExamples: "",
        name: "M.A Karunawantha",
        phoneNo: "716956786",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 10",
        sample: "ෆැසිපික් පුටු /Haji Bedshit",
        newExamples: "",
        name: "Sadun",
        phoneNo: "717363989",
        area: "වෙලකම්ගොඩ්",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 11",
        sample: "කුඩය - 01",
        newExamples: "",
        name: "Amarathunga",
        phoneNo: "77768573",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 12",
        sample: "කුඩය /Haji Bedshit",
        newExamples: "",
        name: "Rajitha",
        phoneNo: "777268573",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 13",
        sample: "කුඩය /J.B.L",
        newExamples: "",
        name: "Aananda",
        phoneNo: "762474786",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 14",
        sample: "කුඩය /ෆැසිපික් පුටු /Haji Bedshit",
        newExamples: "",
        name: "H.M Malika",
        phoneNo: "767329602",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 15",
        sample: "කුඩය /JBL",
        newExamples: "",
        name: "Chamara",
        phoneNo: "716153118",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 16",
        sample: "කුඩය",
        newExamples: "",
        name: "Shanuka",
        phoneNo: "771511709",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 17",
        sample: "කුඩය /Haji Bedshit",
        newExamples: "",
        name: "Champa",
        phoneNo: "716153118",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 18",
        sample: "කුඩය",
        newExamples: "",
        name: "Nandana",
        phoneNo: "718964756",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 19",
        sample: "කුඩය /Haji Bedshit",
        newExamples: "",
        name: "Kamala",
        phoneNo: "762124350",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 20",
        sample: "කුඩය",
        newExamples: "",
        name: "Wasanatha",
        phoneNo: "",
        area: "හැඩිගල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 21",
        sample: "ෆැසිපික් පුටු /කුඩය /Courburd/පිගන් සෙට්",
        newExamples: "",
        name: "Disaru",
        phoneNo: "716070365",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 22",
        sample: "",
        newExamples: "",
        name: "Sadun",
        phoneNo: "717076056",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 23",
        sample: "",
        newExamples: "",
        name: "P.Jayanthi",
        phoneNo: "711996313",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 24",
        sample: "",
        newExamples: "",
        name: "K.M Mangalika",
        phoneNo: "703484520",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 25",
        sample: "",
        newExamples: "",
        name: "D.F Pradhip",
        phoneNo: "705142952",
        area: "තිබෝට්ටව",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 26",
        sample: "",
        newExamples: "",
        name: "Sanjiwani",
        phoneNo: "779078871",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 27",
        sample: "",
        newExamples: "",
        name: "Sanja",
        phoneNo: "778576217",
        area: "ගල්කැටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 28",
        sample: "",
        newExamples: "",
        name: "Indunani",
        phoneNo: "774970324",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 29",
        sample: "",
        newExamples: "",
        name: "W.P Renuka",
        phoneNo: "771579900",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 30",
        sample: "",
        newExamples: "",
        name: "Mahndidum",
        phoneNo: "770768487",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 31",
        sample: "",
        newExamples: "",
        name: "Ruwan",
        phoneNo: "710525852",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 32",
        sample: "",
        newExamples: "",
        name: "Minithila",
        phoneNo: "710444678",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 33",
        sample: "",
        newExamples: "",
        name: "Ranjani",
        phoneNo: "773668257",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 34",
        sample: "",
        newExamples: "",
        name: "K.K Kulasekara",
        phoneNo: "770231180",
        area: "මොරපිටිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 35",
        sample: "",
        newExamples: "",
        name: "Dayangani",
        phoneNo: "778078283",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 36",
        sample: "",
        newExamples: "",
        name: "Lalitha",
        phoneNo: "742238814",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 37",
        sample: "",
        newExamples: "",
        name: "K.A Sadun",
        phoneNo: "744627675",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 38",
        sample: "",
        newExamples: "",
        name: "Kadnarachi",
        phoneNo: "715615316",
        area: "බදුරලිය",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 39",
        sample: "",
        newExamples: "",
        name: "D.L.J Renuka",
        phoneNo: "773434531",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 40",
        sample: "",
        newExamples: "",
        name: "Dayani",
        phoneNo: "704194646",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 41",
        sample: "",
        newExamples: "",
        name: "Maitripala",
        phoneNo: "716955128",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 42",
        sample: "",
        newExamples: "",
        name: "H. Anoma",
        phoneNo: "710140774",
        area: "දෙල්මැල්ල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 43",
        sample: "",
        newExamples: "",
        name: "Hansa",
        phoneNo: "767753899",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 44",
        sample: "",
        newExamples: "",
        name: "S.D Dipika",
        phoneNo: "703270874",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 45",
        sample: "",
        newExamples: "",
        name: "Nandi",
        phoneNo: "762102330",
        area: "බුලත්සිංහල",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 46",
        sample: "",
        newExamples: "",
        name: "Pasara",
        phoneNo: "782559765",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 47",
        sample: "",
        newExamples: "",
        name: "Mahodu",
        phoneNo: "342249737",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 48",
        sample: "",
        newExamples: "",
        name: "Nilanthi",
        phoneNo: "779807957",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 49",
        sample: "",
        newExamples: "",
        name: "A.M.G Uduwela",
        phoneNo: "766245098",
        area: "අගලවත්ත",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 50",
        sample: "",
        newExamples: "",
        name: "Kanthi",
        phoneNo: "766209976",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 51",
        sample: "",
        newExamples: "",
        name: "Somalatha",
        phoneNo: "0342243457",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 52",
        sample: "",
        newExamples: "",
        name: "K.A Ranjini",
        phoneNo: "724781733",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 53",
        sample: "",
        newExamples: "",
        name: "Gayani",
        phoneNo: "718583033",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 54",
        sample: "",
        newExamples: "",
        name: "Ganika",
        phoneNo: "764403853",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 55",
        sample: "",
        newExamples: "",
        name: "Damaiyanthi",
        phoneNo: "760164701",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 56",
        sample: "",
        newExamples: "",
        name: "Mangalika",
        phoneNo: "786479008",
        area: "වැලිපැන්න",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 57",
        sample: "",
        newExamples: "",
        name: "P.A Mangalika",
        phoneNo: "741976514",
        area: "වැලිපැන්න",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 58",
        sample: "",
        newExamples: "",
        name: "Aaruni",
        phoneNo: "787324650",
        area: "වැලිපැන්න",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 59",
        sample: "",
        newExamples: "",
        name: "Wasantha",
        phoneNo: "752361141",
        area: "වැලිපැන්න",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 60",
        sample: "",
        newExamples: "",
        name: "Budika",
        phoneNo: "711949548",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    },
    {
        refNo: "A.G.L 61",
        sample: "",
        newExamples: "",
        name: "Dipika",
        phoneNo: "711947770",
        area: "මතුගම",
        status: "",
        action: "",
        notes: ""
    }
];

// Load data from localStorage or use initial data
function loadOrders() {
    const savedData = localStorage.getItem('orderManagementData');
    return savedData ? JSON.parse(savedData) : initialData;
}

// Save data to localStorage
function saveOrders(data) {
    localStorage.setItem('orderManagementData', JSON.stringify(data));
}

// Main application data
let ordersData = loadOrders();

document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#dataTable tbody');
    const addBtn = document.getElementById('addBtn');
    const newProductBtn = document.getElementById('newProductBtn');
    const searchInput = document.getElementById('searchInput');
    
    // Modal elements
    const entryModal = document.getElementById('entryModal');
    const productModal = document.getElementById('productModal');
    const closeBtns = document.querySelectorAll('.close, .close-product');
    const cancelEntryBtn = document.getElementById('cancelEntry');
    const cancelProductBtn = document.getElementById('cancelProduct');
    const entryForm = document.getElementById('entryForm');
    const productForm = document.getElementById('productForm');
    
    // Current item being edited
    let currentItem = null;
    
    // Initialize the table
    function initTable() {
        renderTable(ordersData);
    }
    
    // Render table with data
    function renderTable(data) {
        tableBody.innerHTML = '';
        
        if (data.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="10" class="no-data">No orders found</td>`;
            tableBody.appendChild(row);
            return;
        }
        
        data.forEach(item => {
            const row = document.createElement('tr');
            
            // Determine status class
            let statusClass = '';
            if (item.status.includes('CONFIRMED')) statusClass = 'status-confirmed';
            else if (item.status.includes('GETTING READY')) statusClass = 'status-getting-ready';
            else if (item.status.includes('TO RETURN')) statusClass = 'status-to-return';
            else if (item.status.includes('INACTIVE')) statusClass = 'status-inactive';
            
            row.innerHTML = `
                <td>${item.refNo}</td>
                <td>${item.sample}</td>
                <td>${item.newExamples}</td>
                <td>${item.name}</td>
                <td>${item.phoneNo}</td>
                <td>${item.area}</td>
                <td><span class="status-badge ${statusClass}">${item.status}</span></td>
                <td>${item.action}</td>
                <td>${item.notes}</td>
                <td class="action-buttons">
                    <button class="action-btn edit" data-id="${item.refNo}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" data-id="${item.refNo}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
        
        // Add event listeners to action buttons
        document.querySelectorAll('.action-btn.edit').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const refNo = e.currentTarget.getAttribute('data-id');
                editEntry(refNo);
            });
        });
        
        document.querySelectorAll('.action-btn.delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const refNo = e.currentTarget.getAttribute('data-id');
                deleteEntry(refNo);
            });
        });
    }
    
    // Open modal to add new entry
    function openAddModal() {
        currentItem = null;
        entryForm.reset();
        document.getElementById('status').value = 'CONFIRMED';
        document.getElementById('action').value = 'ACTIVE';
        entryModal.style.display = 'block';
    }
    
    // Open modal to edit existing entry
    function editEntry(refNo) {
        currentItem = ordersData.find(item => item.refNo === refNo);
        if (!currentItem) return;
        
        // Populate form fields
        document.getElementById('refNo').value = currentItem.refNo;
        document.getElementById('sample').value = currentItem.sample;
        document.getElementById('newExamples').value = currentItem.newExamples;
        document.getElementById('name').value = currentItem.name;
        document.getElementById('phoneNo').value = currentItem.phoneNo;
        document.getElementById('area').value = currentItem.area;
        document.getElementById('status').value = currentItem.status;
        document.getElementById('action').value = currentItem.action;
        document.getElementById('notes').value = currentItem.notes;
        
        entryModal.style.display = 'block';
    }
    
    // Delete an entry
    function deleteEntry(refNo) {
        if (confirm('Are you sure you want to delete this entry?')) {
            ordersData = ordersData.filter(item => item.refNo !== refNo);
            saveOrders(ordersData);
            renderTable(ordersData);
            showToast('Entry deleted successfully');
        }
    }
    
    // Handle entry form submission
    entryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            refNo: document.getElementById('refNo').value,
            sample: document.getElementById('sample').value,
            newExamples: document.getElementById('newExamples').value,
            name: document.getElementById('name').value,
            phoneNo: document.getElementById('phoneNo').value,
            area: document.getElementById('area').value,
            status: document.getElementById('status').value,
            action: document.getElementById('action').value,
            notes: document.getElementById('notes').value
        };
        
        // Validate required fields
        if (!formData.refNo || !formData.name || !formData.phoneNo) {
            showToast('Please fill in all required fields', true);
            return;
        }
        
        if (currentItem) {
            // Update existing item
            Object.assign(currentItem, formData);
            showToast('Entry updated successfully');
        } else {
            // Add new item
            ordersData.unshift(formData);
            showToast('New entry added successfully');
        }
        
        saveOrders(ordersData);
        renderTable(ordersData);
        entryModal.style.display = 'none';
    });
    
    // Open product modal
    newProductBtn.addEventListener('click', function() {
        productForm.reset();
        productModal.style.display = 'block';
    });
    
    // Handle product form submission
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const productData = {
            productRef: document.getElementById('productRef').value,
            productName: document.getElementById('productName').value,
            productDescription: document.getElementById('productDescription').value,
            productPrice: document.getElementById('productPrice').value,
            productCategory: document.getElementById('productCategory').value
        };
        
        // Validate required fields
        if (!productData.productRef || !productData.productName) {
            showToast('Please fill in all required fields', true);
            return;
        }
        
        // In a real app, you would save the product to your database here
        console.log('New product:', productData);
        showToast('Product created successfully');
        productModal.style.display = 'none';
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredData = ordersData.filter(item => 
            Object.values(item).some(val => 
                String(val).toLowerCase().includes(searchTerm)
            )
        );
        renderTable(filteredData);
    });
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            entryModal.style.display = 'none';
            productModal.style.display = 'none';
        });
    });
    
    if (cancelEntryBtn) {
        cancelEntryBtn.addEventListener('click', function() {
            entryModal.style.display = 'none';
        });
    }
    
    if (cancelProductBtn) {
        cancelProductBtn.addEventListener('click', function() {
            productModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === entryModal) {
            entryModal.style.display = 'none';
        }
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });
    
    // Show toast notification
    function showToast(message, isError = false) {
        const toast = document.createElement('div');
        toast.className = `toast ${isError ? 'error' : ''}`;
        toast.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
    
    // Initialize the app
    addBtn.addEventListener('click', openAddModal);
    initTable();
});


// Make location tabs clickable
document.querySelectorAll('.location-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all tabs
        document.querySelectorAll('.location-tab').forEach(t => {
            t.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Here you would typically load data for the selected location
        const location = this.textContent;
        console.log('Location selected:', location);
        
        // You would add code here to filter/load data for this location
    });
});

// Make location tabs clickable
document.querySelectorAll('.location-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all tabs
        document.querySelectorAll('.location-tab').forEach(t => {
            t.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Here you would typically load data for the selected location
        const location = this.textContent;
        console.log('Location selected:', location);
        
        // You would add code here to filter/load data for this location
    });
});

// In your order management system's JavaScript:
function highlightCurrentLocationTab() {
    const currentLocation = getLocationFromURL();
    document.querySelectorAll('.location-tab').forEach(tab => {
        if (tab.textContent === currentLocation) {
            tab.classList.add('active');
        }
    });
}

// Call this when your page loads
document.addEventListener('DOMContentLoaded', highlightCurrentLocationTab);


// This would be your existing order management code
// modified to load location-specific data

document.addEventListener('DOMContentLoaded', function() {
    // Get current location from page title/URL
    const location = document.title.split('|')[0].trim();
    
    // Load location-specific data
    loadLocationData(location);
});

