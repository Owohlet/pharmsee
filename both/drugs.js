Drugs = new Mongo.Collection('drugs');

drugs= [
"Acetazolamide Injection 500 mg",
"Acetazolamide Tablet 250 mg",
"Acetylcysteine Injection 200 mg/mL",
"Acetylsalicylic Acid Tablet 300 mg",
"Acetylsalicylic Acid Tablet 75 mg (Dispersible)",
"Activated Charcoal Powder 50 g",
"Acyclovir Cream 5%",
"Acyclovir Eye Ointment 3%",
"Acyclovir Injection 250 mg vial",
"Acyclovir Suspension 200 mg/5 mL",
"Acyclovir Tablet, 200 mg",
"Adrenaline Injection, 1 mg/1mL (1:1000)",
"Adrenaline Injection, 1:10,000",
"Adriamycin Injection, 50 mg",
"Albendazole Syrup, 100 mg/5 mL",
"Albendazole Tablet, 200 mg",
"Albendazole Tablet, 400 mg",
"Allopurinol Tablet, 100 mg",
"Allopurinol Tablet, 300 mg",
"Aluminium Hydroxide Mixture",
"Amino Acid Solution Injection, 10%",
"Amino Acid Solution Injection, 20%",
"Aminophylline Injection, 250 mg/10 mL",
"Amiodarone Tablet, 200 mg",
"Amitriptyline Tablet, 10 mg",
"Amitriptyline Tablet, 25 mg",
"Amitriptyline Tablet, 50 mg",
"Amlodipine Tablet, 5 mg",
"Amlodipine Tablet, 10 mg",
"Amodiaquine + Artesunate Granular Powder, 75 mg + 25 mg",
"Amodiaquine + Artesunate Granular Powder, 150 mg + 50 mg",
"Amodiaquine + Artesunate Tablet, 75 mg + 25 mg (6 tabs)",
"Amodiaquine + Artesunate Tablet, 150 mg + 50 mg (12 tabs)",
"Amoxicillin + Clavulanic Acid Injection, 500 mg + 100 mg",
"Amoxicillin + Clavulanic Acid Injection, 1.2g",
"Amoxicillin + Clavulanic Acid Suspension, 250 mg + 62 mg",
"Amoxicillin + Clavulanic Acid Suspension, 400 mg + 57 mg",
"Amoxicillin + Clavulanic Acid Tablet, 500 mg + 125 mg",
"Amoxicillin + Clavulanic Acid Tablet, 875 mg + 125 mg",
"Amoxicillin Capsule, 250 mg",
"Amoxicillin Capsule, 500 mg",
"Amoxicillin Suspension, 125 mg/5 mL",
"Ampicillin Injection, 500 mg",
"Artemether + Lumefantrine Tablet, 40 mg + 240 mg (12’s)",
"Artemether + Lumefantrine Tablet, 80 mg + 480 mg (6’s)",
"Artemether Injection, 40 mg/mL",
"Artemether Injection, 80 mg/mL",
"Artesunate Injection, 60mg",
"Artesunate Suppository, 50 mg",
"Artesunate Suppository, 200 mg",
"Atenolol + Hydrochlorthiazide Tablet, 50 mg + 25 mg",
"Atenolol + Hydrochlorthiazide Tablet, 100 mg + 25 mg",
"Atenolol Injection, 500 microgram/10 mL",
"Atenolol Tablet, 25 mg",
"Atenolol Tablet, 50 mg",
"Atenolol Tablet, 100 mg",
"Atorvastatin Tablet, 10 mg",
"Atorvastatin Tablet, 20 mg",
"Atropine Eye Drops, 1%",
"Atropine Injection, 0.6 mg/mL",
"Azithromycin Capsule, 250 mg",
"Azithromycin Oral Suspension, 200 mg/5 mL",
"Azithromycin Oral Suspension, 200 mg/5 mL",
"Bupivacaine + Adrenaline Injection",
"Bupivacaine Injection",
"Diazep am Injection, 5 mg/ml",
"Ephedrine Hydrochloride Injection,50 mg",
"Fentanyl Citrate Injection, 50 microgram",
"Halothane Inhalation, 250 ml",
"Isoflurane Inhalation, 100 ml",
"Ketamine Injection, 10 mg/m",
"Ketamine Injection, 50 mg/ml",
"Ketorolac Injection, 30 mg/ml",
"Lidocaine Injection, 2%",
"Midazolam Injection, 5 mg/ml",
"Midazolam Tablet, 15 mg",
"Neostigmine Injection, 0.5 mg/ml",
"Neostigmine Injection, 2.5 mg/ml",
"Nitrous Oxide Inhalation",
"Noradrenaline (Norepinephrine) Injection, 1 mg/ml (1:1000)",
"Oxygen (Medicinal Gas) Inhalation",
"Pancuronium Bromide, 2 mg/ml",
"Propofol Injection, 10 mg/ml",
"Suxamethonium Succinylcholine Injection, 50mg/m",
"Thiopentone Sodium Injection, 1 g",
"Vecuronium Bromide Injection, 10 mg",
"Bupivacaine Injection, 5 mg/ml",
"Lidocaine + Adrenaline Injection, (10 mg/ml + 5 microgram/ml",
"Lidocaine + Adrenaline Injection,(20 mg/ml + 5 microgram/ml)",
"Lidocaine Cream, 2 %",
"Lidocaine Gel, 2 %",
"Lidocaine Injection, 1 %",
"Lidocaine Injection, 2 %",
"Lidocaine Injection, 20 mg/ml",
"Lidocaine Spray, 10 %",
"Atropine Injection, 0.6 mg/ml",
"Diazepam Injection, 5 mg/ml",
"Lorazepam Injection, 4 mg/ml",
"Lorazepam Tablet, 1 mg",
"Lorazepam Tablet, 2 mg",
"Midazolam Injection, 1mg/ml",
"Midazolam Tablet, 15 mg",
"Acetyl Salicylic Acid Tablet, 300 mg",
"Diclofenac Capsule, 75 mg",
"Diclofenac Gel, 1%",
"Diclofenac Injection, 25 mg/ml",
"Diclofenac Suppository, 100 mg",
"Diclofenac Suppository, 50 mg",
"Diclofenac Tablet, 25 mg",
"Diclofenac Tablet, 50 mg",
"Ibuprofen Suspension, 100 mg/ 5 ml",
"Ibuprofen Tablet, 200 mg",
"Ibuprofen Tablet, 400 mg",
"Paracetamol Suppository, 125 mg",
"Paracetamol Suppository, 250 mg",
"Paracetamol Suppository, 300 mg",
"Paracetamol Suppository, 500 mg",
"Paracetamol Syrup, 120 mg/ 5 ml",
"Paracetamol Tablet, 500 mg",
"Morphine Injection, 10 mg/ml (Preservative - Free)",
"Morphine Injection, 10 mg/ml",
"Morphine Sulphate Tablet, 30 mg (Slow -Release)",
"Morphine Sulphate Tablets, 10 mg",
"Pethidine Injection, 50 mg/ml",
"Tramadol Hydrochloride Injection, 50 mg/ml",
"Tramadol Hydrochloride Capsule, 50 mg",
"Allopurinol Tablet, 100 mg",
"Allopurinol Tablet, 300 mg",
"Adrenaline Injection, 1 mg/ml (1:1000)",
"Chlorphenamine Syrup, 2 mg/ 5 ml",
"Chlorphenamine Tablet, 4 mg",
"Dexamethasone Injection, 4 mg/ml",
"Dexamethasone Tablet, 500 micrograms",
"Hydrocortisone Cream, 1 %",
"Hydrocortisone Sodium Succinate Injection, 100 mg",
"Hydrocortisone Tablet, 10 mg",
"Hydrocortisone Tablet, 20 mg",
"Prednisolone Tablet, 5 mg",
"Promethazine Hydrochloride Elixir, 5 mg/5 ml",
"Promethazine Hydrochloride Injection, 25 mg /ml",
"Promethazine Hydrochloride Tablet, 25 mg",
"Acetylcysteine Injection, 200 mg/ml",
"Activated Charcoal Powder, 50 g",
"Atropine Injection, 0.6 mg/ml",
"Benzatropine Injection, 1 mg/ml",
"Diazepam Injection, 10 mg/ml",
"Flumazenil Injection, 0.2 mg",
"Naloxone Injection, 200 microgram /ml",
"Naloxone Injection, 400 microgram /ml",
"Phytomenadione Injection, 10 mg/ml",
"Phytomenadione Tablet, 10 mg",
"Carbamazepine Tablet, 200 mg (Sustained - Release)",
"Carbamazepine Tablet, 400 mg (Sustained - Release)",
"Carbamazepine Tablet, 100 mg",
"Carbamazepine Tablet, 200 mg",
"Diazepam Injection, 5 mg/ml",
"Diazepam Rectal Tubes, 2 mg/ml",
"Ethosuximide Syrup, 250 mg/ 5 ml",
"Ethosuximide Tablet, 250 mg",
"Magnesium Sulphate Injection, 20 %",
"Magnesium Sulphate Injection, 25 %",
"Magnesium Sulphate Injection, 50 %",
"Phenobarbital Injection, 200 mg/ml",
"Phenytoin Injection, 50 mg/ml",
"Phenytoin Sodium Capsule, 100 mg",
"Phenytoin Sodium Tablet, 100 mg",
"Primidone Tablet, 250 mg",
"Sodium Valproate Syrup, 200 mg/ 5 ml",
"Sodium Valproate Capsule, 500 mg (Slow-Release)",
"Sodium Valproate Capsule, 200 mg",
"Sodium Valproate Tablet, 200 mg",
"Albendazole Syrup, 100 mg/ 5ml",
"Albendazole Tablet, 200 mg",
"Albendazole Tablet, 400 mg",
"Mebendazole Tablet, 100 mg",
"Mebendazole Tablet, 500 mg",
"Niclosamide Tablet, 500 mg",
"Tiabendazole Suspension, 50 mg/ml",
"Tiabendazole Tablet, 500 mg",
"Praziquantel Tablet, 600 mg",
"Amoxicillin + Clavulanic Acid Injection, (500 mg + 100 mg)",
"Amoxicillin + Clavulanic Acid Suspension, (250 mg + 62 mg)",
"Amoxicillin + Clavulanic Acid Suspension, (400 mg + 57mg)",
"Amoxicillin + Clavulanic Acid Tablet, (250 mg + 125 mg)",
"Amoxicillin + Clavulanic Acid Tablet, (500 mg + 125 mg)",
"Amoxicillin Capsule, 250 mg",
"Amoxicillin Capsule, 500 mg",
"Amoxicillin Suspension, 125 mg/ 5 ml",
"Ampicillin Injection, 500 mg",
"Benzathine Benzylpenicillin Injection, 1.2 MU",
"Benzathine Benzylpenicillin Injection, 2.4 MU",
"Benzyl Penicillin Injection, 1 MU",
"Benzyl Penicillin Injection, 5 MU",
"Cloxacillin Injection, 250 mg",
"Cloxacillin Injection, 500 mg",
"Flucloxacillin Capsule, 250 mg",
"Flucloxacillin Suspension, 125 mg/ 5 ml",
"Phenoxymethyl Penicillin Tablet, 250 mg",
"Tetracycline Capsule, 250 mg",
"Azithromycin Capsule, 250 mg",
"Azithromycin Oral s uspension, 200 mg/ml",
"Cefaclor Capsule, 250 mg",
"Cefaclor Capsule, 500 mg",
"Cefaclor Suspension, 125 mg/ 5ml",
"Cefaclor Suspension, 250 mg/ 5ml",
"Cefotaxime Injection, 1 g",
"Cefotaxime Injection, 500 mg",
"Ceftriaxone Injection, 1 g",
"Ceftriaxone Injection, 2 g",
"Ceftriaxone Injection, 250 mg",
"Cefuroxime Injection, 1.5 g",
"Cefuroxime Injection, 750 mg",
"Cefuroxime Suspension, 125 mg/ 5 ml",
"Cefuroxime Tablet, 125 mg",
"Cefuroxime Tablet, 250 mg",
"Chloramphenicol Injection, 1 g",
"Ciprofloxacin Infusion, 2 mg/ml",
"Ciprofloxacin Tablet, 250 mg",
"Ciprofloxacin Tablet, 500 mg",
"Clarithromycin Capsule, 250 mg",
"Clarithromycin Capsule, 500 mg",
"Clarithromycin Paediatric Suspension, 125 mg/m l",
"Clindamycin Capsule, 150 mg",
"Clindamycin Injection, 150 mg/ml",
"Clindamycin Suspension, 75 mg/ 5 ml",
"Co-trimoxazole Suspension, (200 mg + 40 mg) / 5 ml",
"Co-trimoxazole Tablet, (400 mg + 80 mg)",
"Doxycycline Capsule, 100 mg",
"Erythromycin Syrup, 125 mg/ 5 ml",
"Erythromycin Tablet, 250 mg",
"Gentamicin Injection, 40 mg/ml",
"Neomycin Tablet, 500 mg",
"Nitrofurantoin Tablet, 100 mg",
"Ethambutol Tablet, 100 mg",
"Ethambutol Tablet, 400 mg",
"Isoniazid Tablet, 100 mg",
"Isoniazid Tablet, 300 mg",
"Pyrazinamide Tablet, 150 mg",
"Pyrazinamide Tablet, 400 mg",
"Pyridoxine Tablet, 100 mg",
"Pyridoxine Tablet, 50 mg",
"Rifa mpicin + Isoniazid + Ethambutol Tablet, (150 mg + 75 mg + 275 mg)",
"Rifampicin + Isoniazid + Pyrazinamide + Ethambutol Tablet, (150 mg + 75 mg + 400 mg + 275 mg)",
"Rifampicin + Isoniazid + Pyrazinamide Tablet, (60 mg + 30 mg + 150 mg)",
"Rifampicin + Isoniazid Tablet, (150 mg + 75 mg)",
"Rifampicin + Isoniazid Tablet,(60 mg + 30 mg)",
"Rifampicin Tablet, 300 mg",
"Streptomycin Sulphate Injection, 1 g",
"Fluconaz ole Tablets, 50 mg",
"Griseofulvin Tablet, 125 mg",
"Griseofulvin Tablet, 500 mg",
"Itraconazole Tablet, 100 mg",
"Ketoconazole Tablet, 200 mg",
"Miconazole Oral Gel, 20 mg/g",
"Nystatin Suspension, 100 000 IU/ml",
"Nystatin Tablet, 100 000 IU",
"Nystatin Tablet, 500 000 IU",
"Terbinafine Hydrochloride Tablet, 250 mg",
"Metronidazole Injection, 5 mg/ml",
"Metronidazole Suppository, 500 mg",
"Metronidazole Suspension, 100 mg/ 5ml(as benzoate)",
"Metronidazole Suspension, 200 mg/ 5ml(as benzoate)",
"Metronidazole Tablet, 200 mg",
"Metronidazole Tablet, 400 mg",
"Tinidazole Capsule, 500 mg",
"Artemether + Lumefantrine Dispersible Tablet, (20 mg + 120 mg) (Co-Formulated)",
"Artemether + Lumefantrine Tablet, (20 mg + 120 mg ) (Co-Formulated)",
"Artesunate + Amodiaquine Granular Powder, (25 mg + 75 mg)",
"Artesunate + Amodiaquine Tablet, (25 mg + 75 mg) (Co-Blistered)",
"Artesunate + Amodiaquine Tablet, (50 mg + 150 mg) (Co-Blistered)",
"Artesunate + Amodiaquine Tablet, (100 mg + 270 mg) (Fixed Dose)",
"Artesunate + Amodiaquine Tablet, (25 mg + 67.5 mg) (Fixed Dose)",
"Artesunate + Amodiaquine Tablet, (50 mg + 135 mg) (Fixed Dose)",
"Artesunate Injection, 60 mg (as Anhydrous Artesunic acid) + 5 % Sodium bicarbonate solution for reconstitution",
"Artesunate Suppository, 200 mg",
"Artesunate Suppository, 50 mg",
"Arthemether Injection, 40 mg/ml",
"Arthemether Injection, 80 mg/ml",
"Dihydroartemisinin + Piperaquine Tablet,(40 mg + 320 mg) (Co-Formulated)",
"Quinine Dihydrochloride Injection, 300 mg/ml in 2 mls",
"Quinine Dihydrochloride Syrup,20 mg/ml",
"Quinine Sulphate Tablet, 300 mg",
"Sulfadoxine + Pyrimethamine Tablet,(500 mg + 25 mg)",
"Acyclovir Tablet, 200 mg",
"Acyclovir Injection, 25 mg/ml",
"Acyclovir Suspension, 200 mg/ 5ml",
"Acetyl Salicylic Acid Tablet, 300 mg",
"Ergotamine Tartrate Tablet, 1 mg",
"Ergotamine Tartrate Tablet, 2 mg",
"Paracetamol Tablet, 500 mg",
"Propranolol Tablet, 40 mg",
"5-Fluorouracil Injection, 50 mg/ml",
"6-Mercaptopurine Tablet, 50 mg",
"Adriamycin Hydrochloride Injection,10 mg",
"Adriamycin Hydrochloride Injection,50 mg",
"Bicalutamide Tablet, 150 mg",
"Bicalutamide Tablet, 50 mg",
"Bleomycin Injection, 15 IU",
"Busulphan Tablet, 2 mg",
"Busulphan Tablet, 500 microgram",
"Capecitabine Tablet, 500 mg",
"Chlorambucil Tablet, 2 mg",
"Chlorambucil Tablet, 5 mg",
"Cisplatin Injection, 50 mg",
"Crisantaspase Injection, 10 000 units",
"Cyclophosphamide Injection, 200 mg",
"Cyclophosphamide Injection, 500 mg",
"Cyclophosphamide Tablet, 50 mg",
"Cytarabine Injection, 100 mg",
"Dacarbazine Injection, 100 mg",
"Daunorubicin Injection, 50 mg",
"Docetaxel Injection (Concentrate),20 mg/ 0.5 ml",
"Estramustine Phosphate Capsules,140 mg",
"Estramustine Phosphate Capsules, 280 mg",
"Etoposide Capsule, 100 mg",
"Etoposide Injection, 20 mg/ml",
"Flutamide Tablet, 250 mg",
"Folinic Acid Injection, 15 mg",
"Folinic Acid Tablet, 15 mg",
"Goserelin Injection, 10.8 mg",
"Goserelin Injection, 3.6 mg",
"Hydroxycarbamide Capsule, 500 mg",
"Imatinib Tablet, 100 mg",
"Imatinib Tablet, 400 mg",
"Leuprolide Acetate Injection, 3.75 mg/ml",
"Methotrexate Injection, 2.5 mg/ml",
"Methotrexate Injection, 25 mg/ml",
"Methotrexate Tablet, 10 mg",
"Methotrexate Tablet, 2.5 mg",
"Mitoxantrone Injection, 2 mg/ml",
"OncoTICE (Bacillus Calmette-BCG, Strain TICE) Injection",
"Procarbazine Tablet, 50 mg",
"Stilboestrol Tablet, 1 mg",
"Stilboestrol Tablet, 2 mg",
"Stilboestrol Tablet, 5 mg",
"Thiotepa Injection, 15 mg",
"Vinblastine Injection, 1 mg/ml",
"Vincristine Injection, 1 mg",
"Vincristine Injection, 2 mg",
"Vincristine Injection, 5 mg",
"Prednisolone Tablet, 5 mg",
"Benzatropine Tablet, 2 mg",
"Biperiden Injection, 5 mg/ml",
"Biperiden Tablet, 2 mg",
"Trihexyphenidyl Tablet, 2 mg",
"Trihexyphenidyl Tablet, 5 mg",
"Ferrous Sulphate + Folic Acid Tablet,(60 mg + 250 microgram)",
"Ferrous Fumarate Tablet, (100 mg Elemental Iron)",
"Ferrous Sulphate (BPC) Syrup, 60 mg/ 5 ml",
"Ferrous Sulphate Tablet, (60 mg Elemental Iron)",
"Folic Acid Tablet, 5 mg",
"Hydroxycobalamine Injection, 1 mg/ml",
"Iron Dextran Injection, 100 mg/ 2 ml",
"Iron Sucrose Injection, 20 mg/ml",
"Acetyl Salicylic Acid Tablet, 75 mg (Dispersible)",
"Heparin [Low molecular weight] Injection, 4000 units/ml",
"Heparin Injection, 1000 units/ml",
"Heparin Injection, 5000 units/ 0.2 ml",
"Heparin Injection, 5000 units/ml",
"Phytomenadione Tablet, 10 mg",
"Phytomenadione Injection, 1 mg/ml",
"Phytomenadione Injection, 10 mg/ml",
"Protamine sulphate Injection, 10 mg/ml",
"Streptokinase Injection, 100 000 units",
"Streptokinase Injection, 250 000 units",
"Streptokinase Injection, 750 000 units",
"Tirofiban Infusion, 250 micrograms/ml (Concentrate)",
"Tirofiban Infusion, 50 micrograms/ml",
"Tranexamic Acid Capsule, 250 mg",
"Tranexamic Acid Injection, 100 mg/ml",
"Tranexamic Acid Tablet, 500 mg",
"Warfarin Tablet, 5 mg (Scored)",
"Warfarin Tablet, 1 mg",
"Warfarin Tablet, 3 mg",
"Cryoprecipitate",
"Fresh Frozen Plasma",
"Gelatin Infusion (Succinylated Gelatin)",
"Packed Red Cells",
"Platelet Concentrate",
"Glyceryl Trinitrate Sublingual Tablet, 500 microgram",
"Isosorbide Dinitrate Sublingual Tablet, 5 mg",
"Isosorbide Dinitrate Tablet, 10 mg",
"Nifedipine Tablet, 10 mg (Slow-Release)",
"Nifedipine Tablet, 20 mg (Slow -Release)",
"Nifedipine Tablet, 30 mg (GITS)",
"Propranolol Tablet, 10 mg",
"Propranolol Tablet, 40 mg",
"Propranolol Tablet, 80 mg",
"Lidocaine Injection, 20 mg/ml",
"Propranolol Tablet, 10 mg",
"Propranolol Tablet, 40 mg",
"Propranolol Tablet, 80 mg",
"Amlodipine Tablet, 5 mg",
"Amlodipine Tablet, 10 mg",
"Atenolol + Hydrochlorthiazide Tablet,(100 mg + 25 mg)",
"Atenolol + Hydrochlorthiazide Tablet,(50 mg + 25 mg)",
"Atenolol Injection, 500 microgram/ml",
"Atenolol Tablet, 100 mg",
"Atenolol Tablet, 25 mg",
"Atenolol Tablet, 50 mg",
"Bendroflumethiazide Tablet, 2.5 mg",
"Bendroflumethiazide Tablet, 5 mg",
"Bisoprolol Tablet, 5 mg",
"Bisoprolol Tablet, 10 mg",
"Candesartan Tablet, 8 mg",
"Candesartan Tablet, 16 mg",
"Dobutamine Injection, 12.5 mg/ml",
"Hydralazine Injection, 20 mg",
"Hydralazine Tablet, 25 mg",
"Labetalol Injection, 5 mg/ml",
"Losartan Tablet, 25 mg",
"Losartan Tablet, 50 mg",
"Losartan Tablet, 100 mg",
"Methyldopa Tablet, 250 mg",
"Nifedipine Capsule, 5 mg",
"Nifedipine Capsule, 10 mg",
"Nifedipine Tablet, 10 mg (Slow-Release)",
"Nifedipine Tablet, 20 mg (Slow-Release)",
"Nifedipine Tablet, 30 mg (GITS)",
"Prazosin Tablet, 500 microgram",
"Propranolol Injection, 1 mg/ml",
"Propranolol Tablet, 10 mg",
"Propranolol Tablet, 40 mg",
"Propranolol Tablet, 80 mg",
"Ramipril Tablet, 2.5 mg",
"Digoxin Elixir, 50 microgram/ml",
"Digoxin Tablet, 125 microgram",
"Digoxin Tablet, 250 microgram",
"Atorvastatin Tablet, 10 mg",
"Atorvastatin Tablet, 20 mg",
"Fluvastatin Capsule, 20 mg",
"Rosuvastatin Tablet, 5 mg",
"Rosuvastatin Tablet, 10 mg",
"Simvastatin Tablet, 10 mg",
"Simvastatin Tablet, 20 mg",
"Simvastatin Tablet, 40 mg",
"Simvastatin Tablet, 80 mg",
"Hydrocortisone Sodium Succinate Injection, 100 mg",
"Benzoic Acid + Salicylic Acid Ointment, (6 % + 3 %)",
"Ciclopirox Olamine Cream, 1 %",
"Clotrimazole + Hydrocortisone Cream, (2 % + 1 % )",
"Clotrimazole Cream, 2 %",
"Clotrimazole Pessary, 100 mg",
"Clotrimazole Topical Solution, 1 %",
"Clotrimazole Vaginal Tablet, 200 mg",
"Gentian Violet Paint, 1 %",
"Miconazole Cream, 2 %",
"Miconazole Oral Gel, 24 mg/ml",
"Selenium Sulphide Shampoo, 2.5 %",
"Acyclovir Cream, 5 %",
"Cetrimide + Chlorhexidine Gluconate Solution, (0.15 % + 0.015 %)",
"Cetrimide + Chlorhexidine Gluconate Solution, (15 % + 1.5 %)",
"Cetrimide Cream, 0.5 %",
"Cetrimide Solution",
"Chlorhexidine Cream, 1 %",
"Chlorhexidine Solution, 2.5 %",
"Crotamiton Lotion, 10 %",
"Silver Sulphadiazine Cream, 1 %",
"Betamethasone Valerate Cream, 0.05 %",
"Betamethasone Valerate Cream, 0.1 %",
"Calamine Cream, 15 %",
"Calamine Lotion, 15 %",
"Hydrocortisone Cream, 1 %",
"Salicylic Acid Ointment, 2 %",
"Benzyl Benzoate Lotion, 25 %",
"Lindane Lotion, 1 %",
"Aqueous Cream BP",
"Benzoyl Peroxide Solution, 5 %",
"Benzoyl Peroxide Solution, 10 %",
"Clindamycin Solution, 1 %",
"Mercurochrome Solution",
"Fluorescein Solution, 2 %",  
"Fluorescein Strips",  
"Methylcellulose Eye Drops, 1 %",  
"Methylcellulose Eye Drops, 1 %",  
"Rose Bengal Minims, 1 %",
"Tropicamide Eye Drops, 1 %",  
"Diagnostic Strips - Glucose",
"Diagnostic Strips - Multipurpose",
"Diagnostic Strips - Protein",
"Diagnostic Tablets  - Glucose",
"Diagnostic Tablets  - Ketones",
"Edrophonium Injection, 10 mg/ml",
"Chlorhexidine Cream, 1 %",
"Chlorhexidine Solution, 2.5 %",
"Chlorhexidine Solution, 4 % in detergent base",
"Povidone Iodine (aq.) Solution, 10 %",
"Bendroflumethiazide Tablet, 2.5 mg",
"Bendroflumethiazide Tablet, 5 mg",
"Furosemide Injection, 10 mg/ml",
"Furosemide Tablet, 40 mg",
"Mannitol Injection, 10 %",
"Mannitol Injection, 20 %",
"Metolazone Tablet, 5 mg",
"Spironolactone Tablet, 25 mg",
"Spironolactone Tablet, 50 mg",
"Calcium Carbonate Tablet, 500 mg",
"Esomeprazole Capsule, 20 mg",
"Esomeprazole Capsule, 40 mg",
"Esomeprazole Injection, 40 mg",
"Magnesium Trisilicate Mixture",
"Magnesium Trisilicate Tablet, 500 mg",
"Omeprazole Capsule, 20 mg",
"Rabeprazole Capsule, 10 mg",
"Rabeprazole Capsule, 20 mg",
"Ranitidine Injection, 25 mg/ml",
"Ranitidine Tablet, 150 mg",
"Dexamethasone Tablet, 1 mg",
"Dexamethasone Tablet, 500 microgrm",
"Domperidone Tablet, 10 mg",
"Granisetron Injection, 1 mg/ml",
"Granisetron Tablet, 1 mg",
"Metoclopramide Injection, 5 mg/ml",
"Metoclopramide Tablet, 10 mg",
"Promethazine Hydrochloride Elixir,5 mg/ 5 ml",
"Promethazine Hydrochloride Injection,25 mg/ml",
"Promethazine Teoclate Tablet, 25 mg",
"Hyoscine -N-Butyl -Bromide Injection,20 mg/ml",
"Hyoscine -N-Butyl -Bromide Tablet, 10 mg",
"Mebeverine Tablet, 135 mg",
"Bisacodyl Suppository, 10 mg",
"Bisacodyl Tablet, 5 mg",
"Lactulose Liquid, 3.1 - 3.7g/ 5 ml",
"Magnesium Sulphate, Salt",
"Paraffin Liquid",
"Senna Syrup, 7.5 mg/ 5 ml",
"Senna Tablet, 7.5 mg",
"Soothing Agent + Local Anaesthetic Suppository",
"Soothing Agent + Local Anaesthetic Ointment",
"Soothing Agent + Local Anaesthetic +Steroid Suppository",
"Soothing Agent + Local Anaesthetic + Steroid Ointment",
"Oral Rehydration Salts Sachet",
"Oral Rehydration Salts + Zinc Sachet",
"Codeine Tablet, 30 mg",
"Dexamethasone Injection, 4 mg/ml",
"Hydrocortisone Sodium Succinate Injection, 100 mg",
"Prednisolone Tablet, 5 mg",
"Condoms (Female)",
"Condoms (Male)",
"Ethinylestradiol + Levonorgestrel(Injectable Contraceptives)",
"Ethinylestradiol + Levonorgestrel(Oral Hormonal Contraceptives)",
"Ethinylestradiol + Norethisterone(Oral Contraceptives)",
"Levonorgestrel 0.75 mg(Oral contraceptive, mini pill)",
"Levonorgestrel Emergency Contraceptives, 1.5 mg",
"Levonorgestrel Implant Contraceptives", 
"Levonorgestrel Intra Uterine Contraceptives (Hormonal)",
"Medroxyprogesterone Acetate Injection,150 mg (Depot)",
"Conjugated Oestrogen + Norgesterol Tablet, 625 microgram + 150 microgram",
"Conju gated Oestrogen Tablet, 625 microgram",
"Conjugated Oestrogen Vaginal cream,625 micrograms/g",
"Glibenclamide Tablet, 5 mg",
"Gliclazide Tablet, 80 mg",
"Glimepiride Tablet, 1 mg",
"Glimepiride Tablet, 2 mg",
"Glimepiride Tablet, 4 mg",
"Glucagon Injection, 1 mg",
"Insulin aspart, 100 units/ml",
"Insulin detemir, 100 units/ml",
"Insulin glargine, 100 units/ml",
"Insulin lispro, 100 units/ml",
"Insulin pre -mixed (30/70) HM Injection,100 units/ml",
"Insulin Soluble HM, 100 units/ml",
"Isophane Insulin Injection (HM),100 units/ml",
"Metformin Tablet, 500 mg",
"Pioglitazone Tablet, 15 mg",
"Pioglitazone Tablet, 30 mg",
"Rosiglitazone Tablet, 4 mg",
"Tolbutamide Tablet, 500 mg",
"Clomifene Citrate Tablet, 50 mg",
"Medroxyprogesterone Acetate Tablet,5 mg",
"Norethisterone Tablet, 5 mg",
"Carbimazole Tablet, 20 mg",
"Carbimazole Tablet, 5 mg",
"Levothyroxine Tablet, 100 microgram",
"Levothyroxine Tablet, 50 microgram",
"Propylthiouracil Tablet, 50 mg",
"Bromocriptine Tablet, 2.5 mg",
"Tuberculin (PPD) Injection, 20 units/ml",
"Anti D Rh Immunoglobulin Injection",
"Antirabies Immunoglobulins Injection, 1000 IU/ 5 ml",
"Anti -Snake Serum (West African Polyvalent) Injection, 1500 IU/ml",
"Tetanus Toxoid Injection, 40 IU (0.5 ml)",
"Tetanus Immunoglobulins Injection, 250 IU/ml",
"Tetanus Immunoglobulins Injection, 5000 IU/amp",
"Five in One Vaccine Injection(Diphtheria, Pertussis, Tetanus,Haemophilus influenzae b and Hepatitis B)",
"Bacillus Calmette-Guérin (BCG)Vaccine Injection",
"Hepatitis B Vaccine Injection",
"Measles Vaccine Injection",
"Poliomyelitis Vaccine Oral Solution",
"Tetanus Vaccine Injection, 40 IU/ 5 ml",
"Yellow Fever Vaccine Injection",
"Meningococcal Vaccine Injection",
"Rabies Vaccine Injection",
"Tetanus Toxoid Injection, 40 IU (0.5 ml)",
"Tetanus Vaccine Injection, 40 IU/ 5 ml",
"Yellow Fever Vaccine Injection",
"Atracurium Injection, 10 mg/ml", 
"Neostigmine Injection, 0.5 mg",
"Neostigmine Injection, 2.5 mg", 
"Rocuro nium Injection, 10 mg/ml",
"Suxamethonium Injection, 100 mg/ 2 ml", 
"Vecuronium  Bromide Injection, 10 mg",
"Acyclovir Eye Ointment, 3%",
"Chloramphenicol Ear, Eye Drops, 0.5 %",
"Chloramphenicol Eye Ointment, 1 %",
"Ciprofloxacin Eye Drops, 3 %",
"Erythromycin Ointment, 0.5 %",
"Fluconazole Ophthalmic Solution",
"Genta micin Eye Drops, 0.3 %",
"Gentamicin Ointment, 0.3 %",
"Natamycin Eye Drops, 5 %",
"Tetracycline Eye Ointment, 0.5 %",
"Tetracycline Eye Ointment, 1 %",
"Lodoxamide Eye Drops, 0.1 %",
"Sodium Cromoglycate Eye Drops, 4 %",
"Atropine Sulphate Eye Drops, 0.5 %",
"Atropine Sulphate Eye Drops, 1 %",
"Cyclopentolate Eye Drops, 0.5 %",
"Cyclopentolate Eye Drops, 1 %",
"Cyclopentolate Eye Drops, 2 %",
"Phenylephrine Eye Drops, 10 %",
"Phenylephrine Eye Drops, 2.5 %",
"Corticosteroid + Antibiotic Eye Drops",
"Corticosteroid + Antibiotic Eye Ointment",
"Dexamethasone Eye Drops, 1 %",
"Dexamethasone Eye Ointment, 1 %",
"Hydrocortisone Eye Drops, 1 %",
"Hydrocortisone Eye Ointment, 1 %",
"Acetazolamide Injection, 500 mg",
"Acetazolamide Tablet, 250 mg",
"Bimatoprost Eye Drops, 300 micrograms/ml",
"Latanoprost Eye Drops, 50 micrograms/ml",
"Pilocarpine Eye Drops, 2 %",
"Pilocarpine Eye Drops, 4 %",
"Timolol Maleate Eye Drops, 0.5 %",
"Ergometrine Injection, 0.2 mg/ml",
"Ergometrine Injection, 0.5 mg/ml",
"Ergometrine Tablet, 0.2 mg",
"Ergometrine Tablet, 0.5 mg",
"Mifepristone Tablet, 600 microgram",
"Misoprostol Tablet, 100 microgram",
"Misoprostol Tablet, 200 microgram",
"Misoprostol Tablet, 25 microgram",
"Misoprostol Tablet, 50 microgram",
"Misoprostol Vaginal Tablet, 200 microgram",
"Oxytocin Injection, 5 units/ml",
"Oxytocin Injection, 10 units/ml",
"Salbutamol Sulphate Injection, 500 microgram/ml",
"Salbutamol Tablet, 4 mg",
"Amitriptyline Tablet, 10 mg",
"Amitriptyline Tablet, 25 mg",
"Amitr iptyline Tablet, 50 mg",
"Chlordiazepoxide Hydrochloride Tablet, 5 mg",
"Chlorpromazine Injection, 25 mg/ml",
"Chlorpromazine Tablet, 25 mg",
"Chlorpromazine Tablet, 50 mg",
"Chlorpromazine Tablet, 100 mg",
"Diazepam Injection, 5 mg/ml",
"Diazepam Tablet, 5 mg",
"Diazepam Tablet, 10 mg",
"Fluox etine Capsule, 20 mg",
"Fluphenazine Deconoate Injection, 25 mg/ml",
"Haloperidol Injection, 5 mg",
"Haloperidol Tablet, 5 mg",
"Haloperidol Tablet, 10 mg",
"Imipramine Tablet, 25 mg",
"Lithium Carbonate Tablet,200 mg (Slow-Release)",
"Lithium Carbonate Tablet,500 mg (Slow-Release)",
"Lorazepam Tablet, 2 mg",
"Methylphenidate Hydrochloride Tablet,5 mg",
"Olanzapine Injection, 5 mg/ml",
"Olanzapine Tablet, 5 mg",
"Olanzapine Tablet, 10 mg",
"Risperidone Liquid, 1 mg/ml",
"Risperidone Tablet, 1 mg",
"Risperidone Tablet, 2 mg",
"Risperidone Tablet, 500 microgram",
"Sertraline Tablet, 50 mg",
"Sertraline Tablet, 100 mg",
"Sodium Valproate Tablet, 200 mg",
"Adrenaline (Epinephrine) Injection,1 mg/ ml (1:1000)",
"Aminophylline Injection, 250 mg/10 ml",
"Beclometasone dipropionate Inhaler,100 microgram /metered dose (200 doses)",
"Budesonide + Formoterol,(80 microgram/ 4.5 microgram)",
"Budesonide + Formoterol,(160 microgram/ 4.5 microgram)",
"Budesonide 100 microgram",
"Budesonide 200 microgram",
"Fluticasone + Salmeterol,(250 micrograms/ 50 microgram)",
"Fluticasone 50 microgram",
"Fluticasone 125 microgram",
"Fluticasone 250 microgram",
"Hydrocortisone Sodium Succinate Injection, 100 mg",
"Prednisolone Tablet, 5 mg",
"Salbutamol Inhaler, 100 microgram/metered dose Inhaler (200 doses )",
"Salbutamol Nebulizer, 2.5 mg Nebules",
"Salbutamol Nebulizer, 5 mg Nebules",
"Salbutamol Syrup, 2 mg/ 5 ml",
"Salbutamol Tablet, 2 mg",
"Salbutamol Tablet, 4 mg",
"Theophylline Tablet, 200 mg (Slow-Release)",
"Carbocisteine Capsule, 375 mg",
"Carbocisteine Syrup Paediatric,125 mg/ 5ml",
"Carbocisteine Syrup, 250 mg/ 5ml",
"Simple Linctus (Paediatric) BPC",
"Simple Linctus BPC",
"Oral Rehydration Salts, Sachet",
"Potassium Chloride Tablet, 600 mg(Enteric-Coated)",
"Badoe's Solution Injection, 1000 ml",
"Cholera Replacement Fluid Injection, (5:4:1)",
"Darrow's Solution Injection,Half-Strength ( 250 ml)",
"Dextrose in Sodium Chloride Intravenous Infusion, 4.3% in 0.18% (250 ml)",
"Dextrose in Sodium Chloride Intravenous Infusion, 5 % in 0.9% (500 ml )",
"Dextrose in Sodium Chloride Intravenous Infusion, 10 % in 0.18 % (250 ml )",
"Dextrose Infusion, 10 % (250 ml)",
"Dextrose Infusion, 10 % (500 ml )",
"Dextrose Infusion, 20 % (250 ml )",
"Dextrose Infusion, 5 % (250 ml )",
"Dextrose Infusion, 5 % ( 500 ml )",
"Dextrose Infusion, 50 % ( 50 ml )",
"Potassium Chloride Injection,20 mEq/10 ml",
"Ringers Lactate Intravenous Infusion,500ml",
"Sodium Bicarbonate Injection, 8.4 %",
"Sodium Chloride + Potasium Chloride",
"Injection, 0.9 % + 20 mMol (500 ml)",
"Sodium Chloride Injection, 0.45 %(250 ml)",
"Sodium Chloride Injection, 0.9% (250 ml)",
"Sodium Chloride Injection, 0.9% (500 ml)",
"Water for Injection",
"Calciferol Tablet, 10 000 units",
"Calcium Gluconate Injection,100 mg/ml",
"Calcium + Vitamin D Tablet,(97 mg + 10 microgram)",
"Multivitamin Syrup",
"Multivitamin Tablet",
"Pyridoxine Tablet, 100 mg",
"Pyridoxine Tablet, 50 mg",
"Retinol Soft Capsule, 100 000 IU",
"Retinol Soft Capsule, 200 000 IU",
"Thiamine Injection, 100 mg",
"Thiamine Tablet, 25 mg",
"Thiamine Tablet, 50 mg",
"Thiamine Tablet, 100 mg",
"Sodium Chloride Nasal Drops, 0.9 %",
"Chlorhexidine Mouthwash, 0.2 %",
"Lidocaine + Adrenaline Cartridge,(20 mg/ml + [1:80 000/1:100 000])",
"Miconazole Oral Gel, 24 mg/ml",
"Nystatin Ointment, 100 000 IU",
"Abacavir Oral Solution, 20 mg/ml",
"Abacavir Tablet, 300 mg",
"Didanosine Capsule, 200 mg",
"Didanosine Oral solution, 10 mg/ml",
"Didanosine Tablet, 100 mg",
"Didanosine Tablet, 150 mg",
"Didanosine Tablet, 25 mg",
"Didanosine Tablet, 50 mg",
"Efavirenz Capsule, 100 mg",
"Efavirenz Capsule, 200 mg",
"Efavirenz Capsule, 50 mg",
"Efavirenz Syrup, 30 mg/ml",
"Efavirenz Tablet, 600 mg",
"Emtricitabine Tablets, 200 mg",
"Indinavir Tablet, 400 mg",
"Lamivudine Oral solution, 10 mg/ml",
"Lamivudine Tablet, 150 mg",
"Liponavir + Ritonavir Capsule, (133.3 mg + 33.3 mg)",
"Liponavir + Ritonavir Oral solution, (80 mg + 20 mg/ml)",
"Nelfinavir Tablet, 250 mg",
"Nevirapine Suspension, 10 mg/ml",
"Nevirapine Tablet, 200 mg",
"Ritonavir Capsule, 100 mg",
"Saquinavir Capsule, 200 mg",
"Stavudine Capsule, 15 mg",
"Stavudine Capsule, 20 mg",
"Stavudine Capsule, 30 mg",
"Stavudine Capsule, 40 mg",
"Stavudine Oral Solution, 1 mg/ml",
"Tenofovir Tablet, 300 mg",
"Zidovudine + Lamivudine Tablet,(300 mg + 150 mg)",
"Zidovudine Capsule, 100 mg",
"Zidovudine Syrup, 10 mg/ml",
"Zidovudine Tablet, 300 mg",
"Finasteride Tablet, 5 mg",
"Tamsulosin Capsule, 400 microgram",
"Terazosin Tablet, 2 mg",
"Terazosin Tablet, 5 mg"
];