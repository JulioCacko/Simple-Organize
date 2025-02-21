  // Show UI with a specific size to accommodate all options
  figma.showUI(__html__, { visible: false });

  // Interface for the page structure configuration
  interface PageStructure {
    cover: boolean;
    about: boolean;
    research: {
      enabled: boolean;
      bench: boolean;
      presentation: boolean;
    };
    wireframe: {
      enabled: boolean;
      count: number;
    };
    design: {
      enabled: boolean;
      count: number;
    };
    writing: boolean;
    accessibility: boolean;
    components: {
      enabled: boolean;
      local: boolean;
      system: boolean;
    };
  }

  // Handle messages from UI
  figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-structure') {
      try {
        const structure: PageStructure = msg.structure;
        
        // Create Cover page
        if (structure.cover) {
          const coverPage = figma.createPage();
          coverPage.name = "🌄 Cover";
          
          // Create divider
          const divider1 = figma.createPage();
          divider1.name = "--";
        }

        // Create About page
        if (structure.about) {
          const aboutPage = figma.createPage();
          aboutPage.name = "📕 ABOUT";
          
          // Create divider
          const divider2 = figma.createPage();
          divider2.name = "--";
        }

        // Create Research section
        if (structure.research.enabled) {
          const researchPage = figma.createPage();
          researchPage.name = "🔍 Research";
          
          if (structure.research.bench) {
            const benchPage = figma.createPage();
            benchPage.name = "↳ Bench";
          }
          
          if (structure.research.presentation) {
            const presentationPage = figma.createPage();
            presentationPage.name = "↳ Presentation and Data";
          }
          
          // Create divider
          const divider3 = figma.createPage();
          divider3.name = "--";
        }

        // Create Wireframe section
        if (structure.wireframe.enabled) {
          const wireframePage = figma.createPage();
          wireframePage.name = "📃 WIREFRAME";
          
          for (let i = 1; i <= structure.wireframe.count; i++) {
            const versionPage = figma.createPage();
            versionPage.name = `↳ Version ${i}`;
          }
          
          // Create divider
          const divider4 = figma.createPage();
          divider4.name = "--";
        }

        // Create Design section
        if (structure.design.enabled) {
          const designPage = figma.createPage();
          designPage.name = "🎨 DESIGN";
          
          for (let i = 1; i <= structure.design.count; i++) {
            const versionPage = figma.createPage();
            versionPage.name = `↳ Version ${i}`;
          }
          
          // Create divider
          const divider5 = figma.createPage();
          divider5.name = "--";
        }

        // Create Writing section
        if (structure.writing) {
          const writingPage = figma.createPage();
          writingPage.name = "✏️ Writing";
          
          // Create divider
          const divider6 = figma.createPage();
          divider6.name = "--";
        }

        // Create Accessibility section
        if (structure.accessibility) {
          const accessibilityPage = figma.createPage();
          accessibilityPage.name = "♿ Accessibility";
          
          // Create divider
          const divider7 = figma.createPage();
          divider7.name = "--";
        }

        // Create Components section
        if (structure.components.enabled) {
          const componentsPage = figma.createPage();
          componentsPage.name = "🧩 Components";
          
          if (structure.components.local) {
            const localPage = figma.createPage();
            localPage.name = "↳ Local Components";
          }
          
          if (structure.components.system) {
            const systemPage = figma.createPage();
            systemPage.name = "↳ System Components";
          }
        }

        // Notify success and close
        figma.notify("✅ Structure created successfully!");
        figma.closePlugin();
        
      } catch (error) {
        console.error("Error creating structure:", error);
        figma.notify("❌ Error creating structure. Please try again.");
      }
    } else if (msg.type === 'cancel') {
      figma.closePlugin();
    } else if (msg.type === 'close-plugin') {
      figma.closePlugin('Plugin completed successfully');
    }
  };
