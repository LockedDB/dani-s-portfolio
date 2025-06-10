---
title: "Handled raffles with +100k participants at SiVasDescalzo"
description: "At SiVasDescalzo, I worked on implementation and design of a new raffle system that allowed for more complex and dynamic raffles."
image: "../../assets/svd-thumb.jpeg"
company: "SiVasDescalzo"
year: "2020-2021"
technologies: ["Node.js", "PostgreSQL", "Redis", "React", "Stripe API"]
---

## The Challenge

SiVasDescalzo, a premium sneaker retailer, needed a robust raffle system to handle limited edition releases fairly and at scale. Previous systems couldn't handle the massive demand for exclusive drops.

## System Architecture

Built a scalable raffle platform capable of handling massive concurrent load:

### Core Components

- **Entry Management:** Fraud detection and duplicate prevention
- **Fair Selection:** Cryptographically secure random selection
- **Real-time Updates:** Live status updates for participants
- **Payment Integration:** Secure payment processing for winners

### Anti-Fraud Measures

Implemented sophisticated fraud prevention:

- Device fingerprinting
- Behavioral analysis
- Identity verification
- Geographic restrictions

## Technical Implementation

- **Backend:** Node.js with PostgreSQL for data integrity
- **Queue System:** Redis for handling entry processing
- **CDN:** Global distribution for reduced latency
- **Monitoring:** Real-time system health and performance tracking

## Results

The system successfully handled some of the biggest sneaker releases:

- **100,000+** concurrent participants
- **99.99%** uptime during critical releases
- **Zero** successful fraud attempts detected
- **95%** customer satisfaction with the fairness

## Business Impact

- Eliminated customer complaints about unfair releases
- Increased brand reputation in the sneaker community
- Enabled expansion to new limited edition partnerships
- Reduced operational costs by 70%
