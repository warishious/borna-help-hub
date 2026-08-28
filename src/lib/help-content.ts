import {
  Compass,
  Users,
  CalendarDays,
  FileText,
  CreditCard,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

export type Product = "Borna Care" | "Borna Admin";

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; points: string[] }[] }
  | { type: "callout"; title: string; items: string[] }
  | { type: "faq"; items: { q: string; a: string }[] };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export type Topic = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  product: Product;
  articles: number;
  videos: number;
  /** YouTube video id */
  youtubeId?: string;
  videoTitle?: string;
  intro: string;
  sections: Section[];
};

export const topics: Topic[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Sign up, sign in, and verify your Borna admin account.",
    icon: Compass,
    product: "Borna Admin",
    articles: 1,
    videos: 1,
    youtubeId: "gFxfjmlKLMQ",
    videoTitle: "Inside the Borna Dashboard: A Simpler Way to Manage Healthcare",
    intro:
      "Use this guide to learn how clinic admins can create an account, sign in securely, and complete two-factor authentication before accessing the Borna admin workspace.",
    sections: [
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "A valid clinic admin email address.",
              "Access to the phone number linked with your admin account.",
              "Your Borna admin portal link.",
              "A stable internet connection.",
            ],
          },
          {
            type: "p",
            text: "Important: Borna uses two-factor authentication to help protect clinic and patient information. After entering your email and password, you may also need to verify your identity using a code sent to your registered phone number.",
          },
        ],
      },
      {
        id: "sign-in-page",
        title: "Step 1: Open the Borna Admin Sign-in Page",
        blocks: [
          {
            type: "list",
            items: [
              "Go to the Borna admin portal link provided by your clinic or Borna onboarding team.",
              "The Sign in screen will appear.",
              "On this page, you will see the email and password fields on the right side.",
              "Enter your registered work email address.",
              "Enter your password.",
            ],
          },
        ],
      },
      {
        id: "create-account",
        title: "Step 2: Create an Admin Account",
        blocks: [
          { type: "p", text: "Use this step only if you do not already have an admin account." },
          {
            type: "list",
            items: [
              "On the Sign in page, click Sign up now.",
              "The Create Your Account screen will open.",
              "Enter your work email address.",
              "Click the option to send or verify your email code, if required.",
              "Check your email inbox for the verification code.",
              "Enter the code in Borna to confirm your email address.",
              "Create a password.",
              "Confirm your password.",
              "Enter your display name.",
              "Enter your phone number.",
              "Click Create once all required fields are completed.",
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "The Create button may remain inactive until all required information is entered correctly. Check that your email, password, confirmed password, display name, and phone number are complete.",
            ],
          },
        ],
      },
      {
        id: "sign-in",
        title: "Step 3: Sign In with an Existing Admin Account",
        blocks: [
          {
            type: "list",
            items: [
              "Return to the Sign in page.",
              "Enter your registered email address.",
              "Enter your password.",
              "Click Sign in.",
              "Borna will verify your login details.",
              "After your password is accepted, the two-factor authentication screen will appear.",
            ],
          },
        ],
      },
      {
        id: "two-factor",
        title: "Step 4: Complete Two-Factor Authentication",
        blocks: [
          {
            type: "list",
            items: [
              "Review the masked phone number shown on the verification screen.",
              "Choose how you want to receive your verification code.",
              "Select Send Code to receive a code by message.",
              "Alternatively, select Call Me if you prefer to receive the code by phone call.",
              "Once you receive the code, enter it in the verification field.",
              "Click Verify Code.",
              "Borna will confirm the code and complete the sign-in process.",
            ],
          },
        ],
      },
      {
        id: "workspace",
        title: "Step 5: Access the Admin Workspace",
        blocks: [
          {
            type: "p",
            text: "After successful verification, you will be taken into the Borna admin workspace. From the admin workspace, clinic staff can manage clinic operations such as:",
          },
          {
            type: "list",
            items: [
              "Patient forms.",
              "Provider and service configuration.",
              "Payments and payment requests.",
              "Appointments.",
              "Patient communication.",
              "Follow-ups, where available.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I did not receive my verification code",
                a: "Check that your phone number is correct. Wait a few moments and try again. Use the resend option, if available. Try the call option if the message does not arrive. Contact your clinic admin or Borna support if the issue continues.",
              },
              {
                q: "My password is not working",
                a: "Confirm that you are using the correct admin email address. Re-enter your password carefully. Check for extra spaces before or after the password. Use the password reset option, if available. Contact your clinic admin or Borna support if you are still unable to sign in.",
              },
              {
                q: "The Create button is disabled",
                a: "Confirm that all required fields are filled. Make sure the password and confirmed password match. Check that the email verification step has been completed. Confirm that the phone number is entered in the correct format.",
              },
            ],
          },
        ],
      },
      {
        id: "next-step",
        title: "Recommended next step",
        blocks: [
          {
            type: "p",
            text: "After signing in, review the admin dashboard and confirm that your clinic profile, services, providers, forms, and payment settings are configured correctly.",
          },
        ],
      },
    ],
  },
  {
    slug: "payments",
    title: "Payments",
    description: "View, pay, and track payment requests from your clinic.",
    icon: CreditCard,
    product: "Borna Care",
    articles: 1,
    videos: 2,
    youtubeId: "osWYtKXv6_8",
    videoTitle: "Borna Care Payments Section: Review, Pay & Track Your Payment Requests",
    intro:
      "Use this guide to learn how to view and pay a payment request sent by your clinic through Borna Care.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Payments section in Borna Care allows you to view payment requests from your clinic, choose a saved payment method, make a full or partial payment, and download receipts from your payment history.",
          },
          { type: "p", text: "This feature helps you manage clinic payments securely from your patient portal." },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "A connected clinic profile.",
              "A payment request from your clinic.",
              "A saved payment method, or payment details ready to add.",
              "Access to your email or phone if verification is required.",
            ],
          },
        ],
      },
      {
        id: "pay-a-request",
        title: "Pay a payment request",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open your clinic dashboard",
                points: [
                  "Sign in to your Borna Care account.",
                  "Select the clinic that sent you the payment request.",
                  "The clinic dashboard will open with appointments, forms, payments, dependents, notifications, chat, and support.",
                ],
              },
              {
                title: "Open the Payments section",
                points: [
                  "Click Payments from the clinic dashboard.",
                  "The Payments page shows pending payment requests, recent transactions, saved payment methods, and payment history.",
                ],
              },
              {
                title: "Review the payment request",
                points: [
                  "Look for the new payment request in the Payments section.",
                  "Review the payment amount.",
                  "Check the service date.",
                  "Check the current payment status.",
                  "Click Pay Now to open the payment request details.",
                ],
              },
              {
                title: "Review the payment details",
                points: [
                  "Review the clinic name.",
                  "Check the payment request ID.",
                  "Review the due date.",
                  "Confirm the patient information.",
                  "Review the service date.",
                  "Confirm the total amount due.",
                ],
              },
              {
                title: "Choose a payment method",
                points: [
                  "On the right side of the payment page, review the available payment methods.",
                  "You can select a saved card or bank account.",
                  "If you do not want to use a saved method, select the option to add a new payment method.",
                  "Borna Care may allow payment by credit card or bank account, depending on your clinic's setup.",
                ],
              },
              {
                title: "Add a new payment method",
                points: [
                  "Use this step only if you do not want to use an existing saved payment method.",
                  "Select Add New Payment Method.",
                  "Choose whether you want to add card details or bank account details.",
                  "Enter the required payment information and save it, if needed.",
                  "Return to the payment request page to continue the payment.",
                ],
              },
              {
                title: "Select a saved payment method",
                points: [
                  "Choose the payment method you want to use.",
                  "In the demo, the saved bank account ending in 4534 is selected.",
                  "Confirm that the selected payment method is correct before continuing.",
                ],
              },
              {
                title: "Enter the payment amount",
                points: [
                  "Enter the amount you want to pay.",
                  "You may be able to make a partial payment if your clinic allows it.",
                  "In the demo, the payment amount entered is $50.",
                  "Review the amount before submitting the payment.",
                ],
              },
              {
                title: "Submit the payment",
                points: [
                  "Confirm the selected payment method and amount.",
                  "Click Pay.",
                  "Borna Care will begin processing the secure payment.",
                  "Do not refresh or close the page while the payment is being processed.",
                ],
              },
              {
                title: "Review the payment confirmation",
                points: [
                  "Review the payment amount, patient name, and payment date.",
                  "Confirm the clinic name and selected payment method.",
                  "Check the reference note or payment description.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "Before making a payment, always confirm that the clinic name, patient name, amount, and service details are correct.",
            ],
          },
        ],
      },
      {
        id: "status-and-history",
        title: "Payment status, history, and receipts",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Understand the payment status",
                points: [
                  "After submission, the payment may show as Pending.",
                  "This means the payment has been received but may still need to be verified by the clinic.",
                  "Once the clinic confirms the payment, the status may change to Settled.",
                ],
              },
              {
                title: "Return to the Payments page",
                points: [
                  "Click the option to return to the Payments page.",
                  "The payment request will now show an updated status.",
                  "The recent transaction panel also shows the new payment activity.",
                ],
              },
              {
                title: "Open Payment History",
                points: [
                  "From the Payments page, open Payment History.",
                  "This section keeps a record of previous payment activity across connected clinics.",
                  "The table shows transaction details, payment date, payment method, amount, status, and receipt action.",
                ],
              },
              {
                title: "Download a receipt",
                points: [
                  "Find the payment transaction in the Payment History table.",
                  "Click the receipt download option.",
                  "The receipt will download as a PDF file.",
                  "Save the receipt for your records if needed.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Confirm you are inside the correct clinic profile.",
              "Review the payment request amount.",
              "Check the service description.",
              "Confirm the selected payment method.",
              "Make sure the payment amount entered is correct.",
              "Wait for the confirmation screen before leaving the page.",
              "Download the receipt after payment, if needed.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot see the payment request",
                a: "Confirm you are signed in to the correct Borna Care account. Make sure you selected the correct clinic. Open the Payments section again and check whether the request appears under pending payments. Contact the clinic if the payment request is still not visible.",
              },
              {
                q: "My payment method is not showing",
                a: "Check whether you have saved a payment method. Add a new card or bank account if needed. Confirm that all required payment details are entered correctly. Contact the clinic or Borna support if the payment method cannot be added.",
              },
              {
                q: "I entered the wrong amount",
                a: "Review the amount before clicking Pay. If you already submitted the payment, contact the clinic directly and ask how the remaining balance or correction should be handled.",
              },
              {
                q: "My payment is showing as pending",
                a: "Pending status means the payment has been submitted but may still be under verification. Wait for the clinic to confirm the payment and check the Payment History section for updates. Contact the clinic if the status does not change after a reasonable time.",
              },
              {
                q: "I cannot download the receipt",
                a: "Check your browser download settings. Make sure pop-ups or downloads are not blocked. Try downloading the receipt again. Contact the clinic or Borna support if the issue continues.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Payments section in Borna Care allows you to securely pay clinic payment requests from your patient portal. You can open a payment request, review the details, choose a saved payment method, make a full or partial payment, track the status, and download a receipt from Payment History.",
          },
        ],
      },
    ],
  },
  {
    slug: "chatting",
    title: "Chatting",
    description: "Message your clinic, get AI answers, and book through chat.",
    icon: MessageSquare,
    product: "Borna Care",
    articles: 1,
    videos: 1,
    youtubeId: "yOcU7Jb5cvc",
    videoTitle: "Borna Care Chat",
    intro:
      "Use this guide to learn how patients can start a chat with the clinic, ask general questions, get support from the AI assistant, and book an appointment through the Borna Care chat feature.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Chat section in Borna Care allows patients to communicate with their clinic directly from the patient portal. Patients can use chat to:",
          },
          {
            type: "list",
            items: [
              "Ask general clinic questions.",
              "Request appointment support.",
              "Ask billing-related questions.",
              "Get AI-assisted responses.",
              "Book an available appointment.",
              "Review previous chat history.",
            ],
          },
          {
            type: "p",
            text: "This helps patients get quick support without needing to call the clinic for every question.",
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "A connected clinic profile.",
              "Selected the correct clinic from your dashboard.",
              "A stable internet connection.",
            ],
          },
        ],
      },
      {
        id: "start-a-chat",
        title: "Start a chat and ask a question",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open your clinic dashboard",
                points: [
                  "Sign in to your Borna Care account.",
                  "Select the clinic you want to contact.",
                  "The clinic dashboard will open with appointments, forms, payments, dependents, notifications, chat, and support.",
                ],
              },
              {
                title: "Open the Chat section",
                points: [
                  "Click Chat from the clinic dashboard.",
                  "If you have no previous conversations, the page will show that there are no chats yet.",
                  "You can start a new conversation from this screen.",
                ],
              },
              {
                title: "Start a new chat",
                points: [
                  "Click Start New Chat.",
                  "A new conversation will open with the selected clinic.",
                  "The AI assistant will greet you and ask how it can help.",
                  "You may see quick options such as Book Appointment, Billing Question, or General Inquiry.",
                ],
              },
              {
                title: "Ask a general question",
                points: [
                  "Select General Inquiry.",
                  "The AI assistant will ask what you would like to know about the clinic.",
                  "Type your question in the message box and click send.",
                  "In the demo, the patient asks about office timings and the assistant responds with the clinic's working hours, such as Monday to Friday, 9:00 AM to 5:00 PM.",
                ],
              },
              {
                title: "Review the AI response",
                points: [
                  "Read the response from the AI assistant.",
                  "If the answer resolves your question, no further action is needed.",
                  "The conversation may be marked as ended once the response is completed.",
                  "You can still view the conversation later from the chat history panel.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "book-through-chat",
        title: "Book an appointment through chat",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Start another chat",
                points: [
                  "Click Start New Chat again.",
                  "Previous conversations remain available in the chat history on the left side.",
                  "This allows you to keep different requests separate.",
                ],
              },
              {
                title: "Select Book Appointment",
                points: [
                  "The AI assistant will check available appointment options.",
                  "If a slot is available, the assistant will show the date and time.",
                  "Review the available appointment slot.",
                ],
              },
              {
                title: "Select an appointment slot",
                points: [
                  "Click the available appointment option.",
                  "The selected date and time will appear in the chat.",
                  "The AI assistant will confirm the selected appointment details.",
                  "Once confirmed, the appointment will be scheduled.",
                ],
              },
              {
                title: "Confirm the booking",
                points: [
                  "Review the confirmation message from the AI assistant.",
                  "The message will confirm that the appointment has been successfully scheduled.",
                  "You can reply with a short message, such as \u201cThanks,\u201d if needed.",
                ],
              },
              {
                title: "Review chat history",
                points: [
                  "Use the chat history panel to view previous conversations.",
                  "Each conversation remains saved for reference.",
                  "You can review general inquiries, appointment booking conversations, and other clinic-related chats.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Select the correct chat category before sending your message.",
              "Use General Inquiry for clinic hours, location, or general questions.",
              "Use Book Appointment when you want to schedule a visit.",
              "Use Billing Question for payment or billing-related support.",
              "Keep your message clear and specific.",
              "Review the AI response before starting a new chat.",
              "Start a separate chat for a different topic.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot see the Chat option",
                a: "Confirm that you are inside the correct clinic dashboard. Refresh the page. Check whether chat is enabled for your clinic. Contact the clinic if the Chat option is still not visible.",
              },
              {
                q: "The AI assistant did not answer my question",
                a: "Try rephrasing your question clearly. Select the most relevant chat category. Start a new chat if needed. Contact the clinic through Support if the question still cannot be answered.",
              },
              {
                q: "I cannot book an appointment through chat",
                a: "Confirm that appointment booking is available for your clinic. Check whether the AI assistant shows available appointment slots. Try booking from the Appointments section instead. Contact the clinic if no appointment slots are available.",
              },
              {
                q: "My chat ended too soon",
                a: "Open the chat history to review the conversation. Start a new chat if you still need help. Use Support if the request requires clinic staff assistance.",
              },
              {
                q: "I cannot find my previous conversation",
                a: "Open the Chat section again. Check the chat history panel on the left side. Look for the conversation by topic or latest message. Contact the clinic if the conversation history does not appear.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Chat feature in Borna Care gives patients a simple way to contact their clinic from the patient portal. Patients can ask general questions, receive AI-assisted answers, book appointments, and review previous conversations from the chat history.",
          },
        ],
      },
    ],
  },
  {
    slug: "appointments",
    title: "Appointments",
    description: "Book, review, reschedule, or cancel appointments.",
    icon: CalendarDays,
    product: "Borna Care",
    articles: 1,
    videos: 0,
    intro:
      "Use this guide to learn how to book, review, reschedule, or cancel an appointment from the Borna Care patient portal.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Appointments section in Borna Care allows you to view upcoming appointments, check appointment details, book a new appointment, and manage existing appointments from your clinic dashboard.",
          },
          {
            type: "p",
            text: "This feature helps patients schedule visits directly from the portal without needing to call the clinic for every booking request.",
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "A connected clinic profile.",
              "Selected the correct clinic from your dashboard.",
              "Available appointment services and providers configured by the clinic.",
              "Updated contact details in your profile.",
            ],
          },
        ],
      },
      {
        id: "book",
        title: "Book an appointment",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open your clinic dashboard",
                points: [
                  "Sign in to your Borna Care account.",
                  "Select the clinic where you want to book an appointment.",
                  "The clinic dashboard will open with appointments, forms, payments, dependents, notifications, chat, and support.",
                ],
              },
              {
                title: "Open the Appointments section",
                points: [
                  "Click Appointments from the clinic dashboard.",
                  "From here, you can view upcoming appointments, appointment history, and available booking options.",
                  "You may also switch between list view and calendar view, depending on the available display options.",
                ],
              },
              {
                title: "Review existing appointments",
                points: [
                  "Check the calendar or appointment list for any existing appointments.",
                  "Open an appointment to review its details.",
                  "The detail view may show status, provider name, date, time, clinic location, and visit type.",
                ],
              },
              {
                title: "Start a new appointment booking",
                points: [
                  "Click the option to schedule or book another appointment.",
                  "The booking flow will open.",
                  "The process usually includes Choose Your Appointment, Review, and Scheduled.",
                ],
              },
              {
                title: "Choose the appointment service",
                points: [
                  "Select the service or visit type you want to book.",
                  "In the demo, the selected service is Consultation.",
                  "The available services may depend on the clinic's configuration.",
                ],
              },
              {
                title: "Select a provider",
                points: [
                  "After selecting the service, choose the provider.",
                  "In the demo, the selected provider is Albert Einstein.",
                  "If no provider is available, contact the clinic or try a different service.",
                ],
              },
              {
                title: "Select an appointment date and time",
                points: [
                  "Available dates and time slots will appear.",
                  "Select the date that works for you. In the demo, the selected date is July 15.",
                  "Select an available time slot. In the demo, the slot is 1:30 PM to 2:00 PM.",
                ],
              },
              {
                title: "Continue to review",
                points: [
                  "After selecting the date and time, click Next.",
                  "The Review page will show the selected provider, date, time, and clinic location.",
                  "Review these details carefully before submitting.",
                ],
              },
              {
                title: "Confirm patient information",
                points: [
                  "Review the patient name, date of birth, phone number, email address, and new or existing patient status.",
                  "Make sure the information is accurate.",
                  "If any information is incorrect, update your profile or contact the clinic before submitting.",
                ],
              },
              {
                title: "Add an optional message",
                points: [
                  "Use the optional message field to share notes with the clinic.",
                  "You may add a reason for visit, preferred provider note, pain or urgent concern, or a special instruction.",
                  "This field can be left blank if no message is needed.",
                ],
              },
              {
                title: "Submit the appointment request",
                points: [
                  "Review the appointment summary one final time.",
                  "Confirm the service, provider, date and time, and your contact information.",
                  "Click Submit.",
                ],
              },
              {
                title: "Review appointment confirmation",
                points: [
                  "The appointment confirmation page will appear.",
                  "Review the provider, date, time, clinic location, visit type, and appointment status.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "Before booking a new appointment, review your existing appointments to avoid duplicate bookings or scheduling conflicts.",
            ],
          },
        ],
      },
      {
        id: "manage",
        title: "Manage, cancel, and rebook",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Manage the appointment",
                points: [
                  "From the confirmation page, you may see options to manage the appointment.",
                  "Available actions may include Reschedule and Cancel.",
                  "Use these options only if your appointment details need to be changed.",
                ],
              },
              {
                title: "Cancel an appointment",
                points: [
                  "Select the cancel option if you no longer need the appointment.",
                  "Borna Care will show a confirmation message before cancelling.",
                  "Confirm the cancellation only if you are sure.",
                  "Once cancelled, the appointment status will update.",
                ],
              },
              {
                title: "Book a new appointment after cancellation",
                points: [
                  "Return to the scheduling screen.",
                  "Select a new service, provider, date, and time if needed.",
                  "Submit the new appointment request after reviewing the details.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Make sure you are inside the correct clinic profile.",
              "Check existing appointments before booking a new one.",
              "Select the correct service or visit type.",
              "Choose the right provider, if provider selection is available.",
              "Review the appointment date and time carefully.",
              "Confirm your phone number and email address.",
              "Add a short note if the clinic needs extra information.",
              "Do not cancel an appointment unless you are sure you no longer need it.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot see available appointment slots",
                a: "Confirm that you selected a service and a provider. Try a different date or a different provider, if available. Contact the clinic if no slots are showing.",
              },
              {
                q: "I selected the wrong appointment time",
                a: "Do not submit if you are still on the review page — go back and select the correct time. If the appointment was already submitted, use the reschedule or cancel option if available. Contact the clinic if you cannot change the appointment from the portal.",
              },
              {
                q: "My appointment details look incorrect",
                a: "Review the selected service, provider, date, and time. Check your patient information and update your profile if your contact details are wrong. Contact the clinic if the appointment information still appears incorrect.",
              },
              {
                q: "I cannot cancel or reschedule",
                a: "Check whether the clinic allows online cancellation or rescheduling. Some clinics may require direct contact for appointment changes. Use the Support or Chat section if available, or call the clinic if the appointment is urgent.",
              },
              {
                q: "I booked an appointment but did not receive confirmation",
                a: "Check the Appointments section again. Review your notifications. Check your email inbox and spam folder. Contact the clinic if the appointment does not appear.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Appointments section in Borna Care allows patients to view existing appointments, book new visits, review appointment details, and manage cancellations or changes from the patient portal. This gives patients a simple way to schedule care while helping clinics reduce manual appointment coordination.",
          },
        ],
      },
    ],
  },
  {
    slug: "account-clinics-dependents",
    title: "Account, Clinics & Dependents",
    description: "Manage your profile, connect clinics, and add dependents.",
    icon: Users,
    product: "Borna Care",
    articles: 1,
    videos: 1,
    youtubeId: "LBJwFm4sYYw",
    videoTitle: "Borna Care Account Management: Manage Your Profile, Clinics & Dependents",
    intro:
      "Use this guide to learn how to manage your Borna Care account, connect with a clinic, view clinic profiles, contact clinic support, and add dependent profiles.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "Borna Care allows you to manage your personal profile, connected clinics, clinic-specific services, and dependent profiles from one account. You can use this section to:",
          },
          {
            type: "list",
            items: [
              "View and update your profile information.",
              "Review connected clinics.",
              "Connect with a new clinic.",
              "Open a clinic dashboard.",
              "Contact clinic support.",
              "Manage dependent profiles for children or family members.",
            ],
          },
        ],
      },
      {
        id: "before-you-start",
        title: "Before you start",
        blocks: [
          {
            type: "callout",
            title: "Make sure you have",
            items: [
              "Access to your Borna Care patient account.",
              "Your registered email address and phone number.",
              "The clinic name or location ID, if you want to connect with a new clinic.",
              "Permission to manage a dependent profile, if adding a child or family member.",
              "Access to the dependent's phone number and email address, if verification is required.",
            ],
          },
        ],
      },
      {
        id: "account",
        title: "Manage your account",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open the account area",
                points: [
                  "Sign in to your Borna Care account.",
                  "Open the account menu from the left side.",
                  "You will see options such as Profile, My Clinics, Account and Security, and Logout.",
                ],
              },
              {
                title: "Review your profile",
                points: [
                  "Click Profile.",
                  "Review your name, phone number, and registered email address.",
                  "If any information needs to be updated, click Edit Profile.",
                ],
              },
              {
                title: "Open Account and Security",
                points: [
                  "Click Account and Security from the account menu.",
                  "This section is used to manage account-level settings.",
                  "Depending on your clinic setup, this area may include login, authentication, and security-related options.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "Keep your email address and phone number updated. Clinics may use this information to contact you about appointments, forms, payments, and support requests.",
            ],
          },
        ],
      },
      {
        id: "clinics",
        title: "Connect and manage clinics",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open My Clinics",
                points: [
                  "Click My Clinics.",
                  "This page shows all clinics connected to your Borna Care account.",
                  "Each clinic card may show the clinic logo, name, address, and phone number.",
                ],
              },
              {
                title: "Connect with a new clinic",
                points: [
                  "Click Connect New Clinic.",
                  "Use the search field to search by clinic name or location ID.",
                  "Enter the clinic name or location ID provided by your clinic.",
                ],
              },
              {
                title: "Search for the clinic",
                points: [
                  "Type the clinic name or location ID in the search field.",
                  "If the clinic is not found, the system will show No Clinic Found.",
                  "Check the spelling or confirm the location ID with your clinic, then search again.",
                ],
              },
              {
                title: "Select and connect the clinic",
                points: [
                  "When the correct clinic appears, review the clinic name, address, and phone number.",
                  "Click Connect Clinic.",
                  "A confirmation window will appear — review the clinic details before continuing.",
                ],
              },
              {
                title: "Confirm your patient status",
                points: [
                  "Borna Care will ask whether you are already a patient at the selected clinic.",
                  "Select Yes, I'm a patient, or No, this is my first visit.",
                  "Click Connect Clinic to complete the connection.",
                ],
              },
              {
                title: "Confirm the clinic connection",
                points: [
                  "After the clinic is connected, you will return to the Clinics and Care page.",
                  "A success message will confirm the connection.",
                  "The clinic will now appear in your connected clinics list.",
                ],
              },
              {
                title: "Open a clinic dashboard",
                points: [
                  "From My Clinics, select the clinic you want to open.",
                  "From the clinic dashboard, you can access Book Appointment, All Appointments, Forms, Payments, Dependents, Notifications, Chat, and Support.",
                ],
              },
              {
                title: "Contact clinic support",
                points: [
                  "From the clinic dashboard, click Support.",
                  "On the left side, review the clinic name, address, phone number, and email address.",
                  "On the right side, the support form will show your pre-filled contact information.",
                ],
              },
              {
                title: "Submit a support request",
                points: [
                  "Choose your preferred contact method — Email or Phone.",
                  "Enter the reason for contacting the clinic.",
                  "Type your message in the message field.",
                  "Review the information and submit the support request.",
                ],
              },
              {
                title: "Switch between connected clinics",
                points: [
                  "Return to My Clinics and select another connected clinic.",
                  "The clinic dashboard will update based on the selected clinic.",
                  "Appointments, forms, payments, notifications, chat, and dependents are shown separately for each clinic.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "If you are connected to more than one clinic, make sure you select the correct clinic before booking appointments, submitting forms, making payments, or sending support messages.",
            ],
          },
        ],
      },
      {
        id: "dependents",
        title: "Add and manage dependents",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Open the Dependents section",
                points: [
                  "From the clinic dashboard, click Dependents.",
                  "This section is used to manage profiles for children, family members, or other people you are authorized to support.",
                  "If no dependents have been added yet, the page will show that there are no dependent profiles.",
                ],
              },
              {
                title: "Add a dependent",
                points: [
                  "Click Add Dependent.",
                  "The Add Dependent page will open.",
                  "This form allows you to create a dependent profile under your Borna Care account.",
                ],
              },
              {
                title: "Upload a dependent profile image",
                points: [
                  "At the top of the form, you may see an image upload area. This step is optional.",
                  "Upload a profile photo by dragging an image into the upload area or browsing from your device.",
                  "Use a clear square image and follow the file size limit shown on the page.",
                ],
              },
              {
                title: "Confirm guardian information",
                points: [
                  "Answer whether you are the guardian.",
                  "This helps the clinic confirm that you are authorized to manage the dependent's profile, appointments, forms, and communication.",
                  "Select the option that applies to your situation.",
                ],
              },
              {
                title: "Enter dependent name details",
                points: [
                  "Enter the dependent's first name and last name.",
                  "Confirm whether the dependent is already a patient at the selected clinic.",
                  "This helps the clinic match the dependent with an existing patient record, if one exists.",
                ],
              },
              {
                title: "Verify the dependent's phone number",
                points: [
                  "Enter the dependent's phone number.",
                  "Choose how to receive the verification code — SMS or phone call.",
                  "Send the code, enter it in the verification field, and click Verify.",
                ],
              },
              {
                title: "Verify the dependent's email address",
                points: [
                  "Enter the dependent's email address.",
                  "Send the email verification code and check the inbox.",
                  "Enter the code in the verification field and click Verify.",
                ],
              },
              {
                title: "Add additional dependent details",
                points: [
                  "Enter the dependent's date of birth.",
                  "Select the dependent's gender.",
                  "Select the relationship to the account holder.",
                  "Review the information before saving.",
                ],
              },
              {
                title: "Save the dependent profile",
                points: [
                  "Complete all required fields.",
                  "Make sure phone and email verification are completed, if required.",
                  "Review the dependent details and click Save Dependent.",
                  "The dependent profile will be added to the selected clinic.",
                ],
              },
            ],
          },
          {
            type: "callout",
            title: "Note",
            items: [
              "The Save Dependent button may remain disabled until all required information and verification steps are completed.",
            ],
          },
        ],
      },
      {
        id: "best-practices",
        title: "Best Practices",
        blocks: [
          {
            type: "list",
            items: [
              "Keep your personal profile information updated.",
              "Connect only with clinics you recognize.",
              "Confirm the correct clinic before taking any action.",
              "Use the Support section for clinic-specific questions.",
              "Add dependent profiles only if you are authorized to manage them.",
              "Verify phone and email details carefully.",
              "Review dependent information before saving.",
              "Use separate clinic dashboards for different clinics.",
            ],
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "I cannot find my clinic",
                a: "Check the spelling of the clinic name. Try searching by location ID. Confirm the clinic details with your dental office. Refresh the page and try again. Contact the clinic if it still does not appear.",
              },
              {
                q: "I connected to the wrong clinic",
                a: "Do not submit forms, payments, or appointment requests under the wrong clinic. Contact the clinic or Borna support for assistance and ask how to remove or correct the clinic connection.",
              },
              {
                q: "I cannot open a clinic dashboard",
                a: "Confirm the clinic appears under My Clinics. Refresh the page. Sign out and sign in again. Contact the clinic if the dashboard still does not open.",
              },
              {
                q: "I cannot add a dependent",
                a: "Confirm that you are inside the correct clinic dashboard. Check that all required fields are completed. Complete phone and email verification, if required. Confirm that you selected the guardian and relationship details. Contact the clinic if the dependent still cannot be added.",
              },
              {
                q: "I did not receive the phone verification code",
                a: "Confirm the phone number is correct. Wait a few moments and try again. Use the resend option, if available. Try the phone call option, if available. Contact the clinic if the issue continues.",
              },
              {
                q: "I did not receive the email verification code",
                a: "Confirm the email address is correct. Check the spam or junk folder. Wait a few moments and try again. Use the resend option, if available. Contact the clinic if the code still does not arrive.",
              },
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary",
        blocks: [
          {
            type: "p",
            text: "The Account and Dependent Management section in Borna Care helps you manage your profile, connect with clinics, switch between clinic dashboards, contact clinic support, and create dependent profiles. This allows families and caregivers to manage clinic-related activity from one secure Borna Care account.",
          },
        ],
      },
    ],
  },
  {
    slug: "forms",
    title: "Forms",
    description: "Complete, review, and submit clinic forms securely.",
    icon: FileText,
    product: "Borna Care",
    articles: 0,
    videos: 1,
    youtubeId: "UxgaG4bRBCs",
    videoTitle: "How to Complete a New Patient Form in Borna Care",
    intro:
      "Watch how to open, complete, review, and submit a new patient form from the Borna Care patient portal.",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The Forms section in Borna Care lets you complete the intake and consent forms your clinic sends you, review your answers, and submit them securely before your visit. Watch the video walkthrough above for the full flow.",
          },
        ],
      },
    ],
  },
];

export type VideoItem = {
  id: string;
  title: string;
  topic: string;
  topicSlug: string;
  product: Product;
  youtubeId: string;
  description: string;
};

export const videos: VideoItem[] = [
  {
    id: "yOcU7Jb5cvc",
    title: "Borna Care Chat",
    topic: "Chatting",
    topicSlug: "chatting",
    product: "Borna Care",
    youtubeId: "yOcU7Jb5cvc",
    description: "Start a chat with your clinic, ask questions, and book through chat.",
  },
  {
    id: "UxgaG4bRBCs",
    title: "How to Complete a New Patient Form in Borna Care",
    topic: "Forms",
    topicSlug: "forms",
    product: "Borna Care",
    youtubeId: "UxgaG4bRBCs",
    description: "Fill in, review, and securely submit a new patient form.",
  },
  {
    id: "osWYtKXv6_8",
    title: "Borna Care Payments Section: Review, Pay & Track Your Payment Requests",
    topic: "Payments",
    topicSlug: "payments",
    product: "Borna Care",
    youtubeId: "osWYtKXv6_8",
    description: "Review a payment request, pay it, and track it in your history.",
  },
  {
    id: "gd7jmOGaDkI",
    title: "Borna Care Payment Dashboard: Create, Send & Track Patient Payment Requests",
    topic: "Payments",
    topicSlug: "payments",
    product: "Borna Admin",
    youtubeId: "gd7jmOGaDkI",
    description: "Create, send, and track patient payment requests from the admin dashboard.",
  },
  {
    id: "LBJwFm4sYYw",
    title: "Borna Care Account Management: Manage Your Profile, Clinics & Dependents",
    topic: "Account, Clinics & Dependents",
    topicSlug: "account-clinics-dependents",
    product: "Borna Care",
    youtubeId: "LBJwFm4sYYw",
    description: "Manage your profile, connect clinics, and add dependent profiles.",
  },
  {
    id: "gFxfjmlKLMQ",
    title: "Inside the Borna Dashboard: A Simpler Way to Manage Healthcare",
    topic: "Getting Started",
    topicSlug: "getting-started",
    product: "Borna Admin",
    youtubeId: "gFxfjmlKLMQ",
    description: "A tour of the Borna admin dashboard and how clinics manage day-to-day work.",
  },
];

export const popularGuides = [
  { title: "Signing up and signing in to the admin portal", slug: "getting-started" },
  { title: "Paying a payment request", slug: "payments" },
  { title: "Booking an appointment", slug: "appointments" },
  { title: "Using chat in Borna Care", slug: "chatting" },
];

export type SearchResult = {
  kind: "Article" | "Video";
  title: string;
  description: string;
  topic: string;
  topicSlug: string;
  product: Product;
};

const articleResults: SearchResult[] = topics.map((t) => ({
  kind: "Article",
  title: t.title,
  description: t.description,
  topic: t.title,
  topicSlug: t.slug,
  product: t.product,
}));

const videoResults: SearchResult[] = videos.map((v) => ({
  kind: "Video",
  title: v.title,
  description: v.description,
  topic: v.topic,
  topicSlug: v.topicSlug,
  product: v.product,
}));

export const allResults: SearchResult[] = [...articleResults, ...videoResults];

export function searchHelp(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allResults.filter((r) =>
    `${r.title} ${r.description} ${r.topic} ${r.product}`.toLowerCase().includes(q),
  );
}
